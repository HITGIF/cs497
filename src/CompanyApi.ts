import post from "@app/post";
import { CompanyStatsRequest } from "@app/proto/api";
import { URL_BASE } from "@app/api";
import { buildProto } from "@app/buildProto";

export const CHARACTERISTICS = [
  "gender",
  "sexual_orientation",
  "racial_origin",
  "visa_status",
  "nationality",
  "disability",
  "veteran_status",
  "criminal_background",
  "indigenous",
  "marriage_status",
];

export interface CompanyStatsResponse {
  domain: string;
  stages: {
    [stage: string]: {
      [char: string]: {
        [value: string]: number;
      }
    }
  };
}

export const getCompanyStatsByName = async (name: string) => {
  return (await post<CompanyStatsRequest, CompanyStatsResponse>(
    `${URL_BASE}/company/${name}`,
    buildProto<CompanyStatsRequest>({
      interestedAttributes: CHARACTERISTICS,
      jobTitleFilter: "",
    }),
    CompanyStatsRequest,
    undefined,
  ));
};

export const companyLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;