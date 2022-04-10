import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import styled from "styled-components";
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { FormEvent, useState } from "react";
import { CompanySelect } from "@app/CompanySelect";
import { CountrySelect } from "@app/CountrySelect";
import { Help } from '@mui/icons-material';
import {
  BooleanAnswer,
  EducationLevel,
  Gender,
  MarriageStatus,
  RacialOrigin,
  SexualOrientation,
  Stage,
  SubmitApplicationStatus,
  VisaStatus
} from "@app/proto/api";
import { capitalize } from "@app/helpers";
import { useSimpleState } from "@app/useSimpleState";
import post from "@app/post";
import { URL_BASE } from "@app/api";
import { buildProto } from "@app/buildProto";
import { Snack } from "@app/Snack";
import { observer } from "mobx-react";

const keys = (raw: Object) => Object
  .keys(raw)
  .filter(value => isNaN(Number(value)))
  .slice(0, -1)
  .map(it => it.split("_").map(capitalize).join(" "))

const jobInfoFields: Field[] = [
  {
    key: "jobTitle",
    label: "Job Title",
    required: true,
  },
  {
    key: "compensation",
    label: "Compensation",
  },
  {
    key: "date",
    label: "Date of Application",
  },
  {
    key: "stage",
    label: "Stage",
    options: keys(Stage),
    helper: "Please select the last stage you have been through",
  },
]

const aboutFields: Field[] = [
  {
    key: "gender",
    label: "Gender",
    options: keys(Gender),
  },
  {
    key: "sexualOrientation",
    label: "Sexual Orientation",
    options: keys(SexualOrientation),
  },
  {
    key: "racialOrigin",
    label: "Racial Origin",
    options: keys(RacialOrigin),
  },
  {
    key: "identifyAsIndigenousPeople",
    label: "I identify as indigenous people",
    options: keys(BooleanAnswer),
  },
  {
    key: "visaStatus",
    label: "Visa Status",
    options: keys(VisaStatus),
    helper: "Please select your visa status of the country where the job requires you to be present"
  },
  {
    key: "disability",
    label: "Disability",
    options: keys(BooleanAnswer),
  },
  {
    key: "veteranStatus",
    label: "Veteran Status",
    options: keys(BooleanAnswer),
  },
  {
    key: "criminalBackground",
    label: "Criminal Background",
    options: keys(BooleanAnswer),
  },
  {
    key: "marriageStatus",
    label: "Marriage Status",
    options: keys(MarriageStatus),
  },
];

const educationFields: Field[] = [
  {
    key: "education",
    label: "Highest Education",
    options: keys(EducationLevel),
  },
  {
    key: "graduationYear",
    label: "Graduation Year",
  },
  {
    key: "yearsOfExperience",
    label: "Years of Experience",
  },
  {
    key: "gpa",
    label: "GPA",
  },
];

type Field = {
  key: keyof FormRequired;
  label: string;
  required?: boolean;
  value?: any;
  options?: string[];
  helper?: string;
}

type FormRequired = {
  company?: string;
  jobTitle?: string;
  stage?: string;
  compensation?: string;
  date?: string;

  gender?: string;
  sexualOrientation?: string;
  racialOrigin?: string;
  visaStatus?: string;
  nationality?: string;
  disability?: string;
  veteranStatus?: string;
  criminalBackground?: string;
  identifyAsIndigenousPeople?: string;
  marriageStatus?: string;

  education?: string;
  graduationYear?: string;
  yearsOfExperience?: number;
  gpa?: number;
}

interface Form extends FormRequired {
  [key: string]: any;
}

type Section = {
  label: string;
  content: JSX.Element;
}

export const Submission = observer(() => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [form, setForm] = useState<Form>({});
  const sending = useSimpleState(false);
  const sendError = useSimpleState<string | null>(null);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (sending.value) {
      return;
    }
    sending.set(true);

    post<SubmitApplicationStatus, string>(
      `${URL_BASE}/submit`,
      buildProto<SubmitApplicationStatus>({
        companyName: form.company,
        //stage: form.stage,
        jobTitle: form.company,
        // companyName: form.company,
        // companyName: form.company,
        // companyName: form.company,
        // companyName: form.company,
        // companyName: form.company,
        // companyName: form.company,
      }),
      SubmitApplicationStatus,
      undefined,
    ).then((response) => {
      sending.set(false);
      if (response === "OK") {
        // jump
        return
      } else {
        sendError.set("Internal server error.");
      }
    }).catch(e => {
      sending.set(false);
      sendError.set(`Network error: ${e.message}`);
    })
  };

  const setField = (key: string, value: any) => setForm({...form, [key]: value});

  const render = (field: Field) => (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      {field.options ? (
        <FormControl>
          <InputLabel id={`${field.key}-label`}>{field.label}</InputLabel>
          <StyledSelect
            required={field.required}
            labelId={`${field.key}-label`}
            id={field.key}
            value={form[field.key]}
            label={field.label}
            onChange={(e) => {
              setField(field.key, e.target.value)
            }}
          >
            {field.options.map((option, index) => (
              <MenuItem value={index}>{option}</MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      ) : (
        <StyledTextField
          required={field.required}
          label={field.label}
          value={form[field.key]}
          onChange={(e) => {
            setField(field.key, e.target.value)
          }}
        />
      )}
      {field.helper ? (
        <Tooltip title={field.helper}>
          <StyledIconButton>
            <Help/>
          </StyledIconButton>
        </Tooltip>
      ) : null}
    </Stack>
  );

  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Typography pt={16} pb={6} variant={"h3"} fontWeight={800}>
              Share Your Application Experience
            </Typography>
          </Container>
        </Stack>
        <Container>
          <Stack pt={4} pb={4} spacing={2} component={"form"} onSubmit={submitForm}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {[
                {
                  label: 'Job Information',
                  content: (
                    <Stack sx={{marginY: 2}} spacing={2}>
                      <CompanySelect
                        value={form["company"]}
                        onChange={text => {
                          setField("company", text)
                        }}/>
                      {jobInfoFields.map(render)}
                    </Stack>
                  ),
                },
                {
                  label: 'Identity',
                  content: (
                    <Stack sx={{marginY: 2}} spacing={2}>
                      <CountrySelect
                        value={form.country}
                        onChange={text => {
                          setField("country", text)
                        }}/>
                      {aboutFields.map(render)}
                    </Stack>
                  ),
                },
                {
                  label: 'Education',
                  content: (
                    <Stack sx={{marginY: 2}} spacing={2}>
                      {educationFields.map(render)}
                    </Stack>
                  ),
                },
              ].map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <>{step.content}</>
                    <Box sx={{mb: 2}}>
                      <div>
                        {index === 2 ? (
                          <Button
                            variant="contained"
                            type="submit"
                            sx={{mt: 1, mr: 1}}
                            endIcon={
                              sending.value ? (
                                <CircularProgress
                                  sx={{
                                    color: "primary.contrastText",
                                    width: "20px !important",
                                    height: "20px !important"
                                  }}
                                />
                              ) : null
                            }
                          >
                            Finish
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{mt: 1, mr: 1}}
                          >
                            Continue
                          </Button>
                        )}
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{mt: 1, mr: 1}}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Container>
      </Background>
      <Footer/>
      <Snack
        open={!!sendError.value}
        message={sendError.value}
        severity={"error"}
        onClose={() => sendError.set(null)}
      />
    </Stack>
  )
})

const StyledTextField = styled(TextField)`
  width: 300px;
`

const StyledSelect = styled(Select)`
  width: 300px;
`

const StyledIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
`
