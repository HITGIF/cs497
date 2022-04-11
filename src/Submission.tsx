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
import { Help } from "@mui/icons-material";
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
import { keys } from "@app/helpers";
import { useSimpleState } from "@app/useSimpleState";
import post from "@app/post";
import { URL_BASE } from "@app/api";
import { buildProto } from "@app/buildProto";
import { Snack } from "@app/Snack";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";

const jobInfoFields: Field[] = [
  {
    key: "jobTitle",
    label: "Job Title",
    required: true,
  },
  {
    key: "stage",
    label: "Stage",
    options: keys(Stage),
    helper: "Please select the last stage you have been through",
  },
];

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
  companyDomain?: string;
  jobTitle?: string;
  stage?: number;
  compensation?: number;
  date?: number;

  gender?: number;
  sexualOrientation?: number;
  racialOrigin?: number;
  visaStatus?: number;
  nationality?: string;
  disability?: number;
  veteranStatus?: number;
  criminalBackground?: number;
  identifyAsIndigenousPeople?: number;
  marriageStatus?: number;

  education?: number;
  graduationYear?: number;
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

  const [form, setForm] = useState<Form>({});
  const sending = useSimpleState(false);
  const sendError = useSimpleState<string | null>(null);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  if (shouldNavigate) {
    return <Navigate to="/"/>;
  }

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (sending.value) {
      return;
    }
    sending.set(true);

    post<SubmitApplicationStatus, string>(
      `${URL_BASE}/apps/`,
      buildProto<SubmitApplicationStatus>({
        companyName: form.company,
        companyDomain: form.companyDomain,
        stage: form.stage,
        jobTitle: form.jobTitle,
        gender: form.gender,
        sexualOrientation: form.sexualOrientation,
        racialOrigin: form.racialOrigin,
        visaStatus: form.visaStatus,
        nationality: form.nationality,
        disability: form.disability,
        veteranStatus: form.veteranStatus,
        criminalBackground: form.criminalBackground,
        indigenous: form.identifyAsIndigenousPeople,
        marriageStatus: form.marriageStatus,
        educationLevel: form.education,
        yearOfGraduation: form.graduationYear,
        yearsOfExperience: form.yearsOfExperience,
        gpa: form.gpa,
      }),
      SubmitApplicationStatus,
      undefined,
    ).then((response) => {
      sending.set(false);
      if (response === "OK") {
        setShouldNavigate(true);
        return;
      } else {
        sendError.set("Internal server error.");
      }
    }).catch(e => {
      sending.set(false);
      sendError.set(`Network error: ${e.message}`);
    });
  };

  const setField = (key: keyof FormRequired, value: any) => setForm({...form, [key]: value});
  const setFields = (fields: { [key in keyof FormRequired]: any }) => setForm({...form, ...fields});

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
              setField(field.key, e.target.value);
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
            setField(field.key, e.target.value);
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

  const sections: Section[] = [
    {
      label: "Job Information",
      content: (
        <Stack sx={{marginY: 2}} spacing={2}>
          <CompanySelect
            value={form.company}
            onChange={(name, domain?: string) => {
              setFields({
                company: name,
                companyDomain: domain
              });
            }}/>
          {jobInfoFields.map(render)}
        </Stack>
      ),
    },
    {
      label: "Identity",
      content: (
        <Stack sx={{marginY: 2}} spacing={2}>
          <CountrySelect
            value={form.nationality}
            onChange={text => {
              setField("nationality", text);
            }}/>
          {aboutFields.map(render)}
        </Stack>
      ),
    },
    {
      label: "Education",
      content: (
        <Stack sx={{marginY: 2}} spacing={2}>
          {educationFields.map(render)}
        </Stack>
      ),
    },
  ];

  return (
    <Stack>
      <ScrollToTop/>
      <Background color={"background.default"}>
        <Stack width={"100%"} height={"fit-content"} bgcolor={"primary.main"}>
          <Container>
            <Typography pt={20} pb={6} variant={"h3"} fontWeight={800}>
              Share Your Application Experience
            </Typography>
          </Container>
        </Stack>
        <Container>
          <Stack pt={4} pb={4} spacing={2} component={"form"} onSubmit={submitForm}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {sections.map((step, index) => (
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
                      <Typography variant="caption" color="gray">
                        Your data will be aggregated and shared anonymously.<br/>
                        As a demo, please do not submit any real data just yet.
                      </Typography>
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
  );
});

const StyledTextField = styled(TextField)`
  width: 300px;
`;

const StyledSelect = styled(Select)`
  width: 300px;
`;

const StyledIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
`;
