import {
  Box,
  Button,
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
import { ScrollToTop } from "@app/ScrollToTop";
import { Background } from "@app/Background";
import { Footer } from "@app/Footer";
import React, { useEffect, useState } from "react";
import { CompanySelect } from "@app/CompanySelect";
import { Help } from '@mui/icons-material';
import styled from "styled-components";

const jobInfoFields: Field[] = [
  {
    key: "jobTitle",
    label: "Job Title",
  },
  {
    key: "stage",
    label: "Stage",
    options: [
      "Applied",
      "Online Assessment",
      "Interview",
      "Offer",
    ],
    helper: "ksjaldfh",
  },
]

const aboutFields: Field[] = [
  {
    key: "gender",
    label: "Gender",
    options: [
      "Male",
      "Female",
    ],
  },
  {
    key: "sexualOrientation",
    label: "Sexual Orientation",
    options: [
      "Bisexual",
      "sasas",
    ],
  },
];

const educationFields: Field[] = [
  {
    key: "gender",
    label: "Gender",
    options: [
      "Male",
      "Female",
    ],
  },
  {
    key: "sexualOrientation",
    label: "Sexual Orientation",
    options: [
      "Bisexual",
      "sasas",
    ],
  },
];

type Field = {
  key: keyof FormRequired;
  label: string;
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
  ongoing?: boolean;
  graduationYear?: string;
  gpa?: number;
}

interface Form extends FormRequired {
  [key: string]: any;
}

type Section = {
  label: string;
  content: JSX.Element;
}

const getSections = (
  form: Form,
  setField: (key: keyof FormRequired, value: any) => void,
): Section[] => {
  const render = (field: Field) => (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      {field.options ? (
        <FormControl>
          <InputLabel id={`${field.key}-label`}>{field.label}</InputLabel>
          <StyledSelect
            labelId={`${field.key}-label`}
            id={field.key}
            label={field.label}
            value={form[field.key]}
            onChange={(e) => {
              setField(field.key, e.target.value)
            }}
          >
            {field.options.map(option => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      ) : (
        <StyledTextField
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

  return [
    {
      label: 'Job Information',
      content: (
        <Stack sx={{marginY: 2}} spacing={2}>
          <CompanySelect value={form["company"]} onChange={text => {
            setField("company", text)
          }}/>
          {jobInfoFields.map(render)}
        </Stack>
      ),
    },
    {
      label: 'About You',
      content: (
        <Stack sx={{marginY: 2}} spacing={2}>
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
  ]
};

export function Submission() {
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

  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    setSections(getSections(form, (key, value) => setForm({...form, [key]: value})))
  }, [form]);

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
          <Stack pt={4} pb={4} spacing={2}>
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
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{mt: 1, mr: 1}}
                        >
                          {index === sections.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
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
    </Stack>
  )
}

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
