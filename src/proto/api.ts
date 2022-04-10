/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export enum Stage {
  Applied = 0,
  OnlineAssessment = 1,
  Interview = 2,
  Interview2 = 3,
  Interview3 = 4,
  Offer = 5,
  UNRECOGNIZED = -1,
}

export function stageFromJSON(object: any): Stage {
  switch (object) {
    case 0:
    case "Applied":
      return Stage.Applied;
    case 1:
    case "OnlineAssessment":
      return Stage.OnlineAssessment;
    case 2:
    case "Interview":
      return Stage.Interview;
    case 3:
    case "Interview2":
      return Stage.Interview2;
    case 4:
    case "Interview3":
      return Stage.Interview3;
    case 5:
    case "Offer":
      return Stage.Offer;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Stage.UNRECOGNIZED;
  }
}

export function stageToJSON(object: Stage): string {
  switch (object) {
    case Stage.Applied:
      return "Applied";
    case Stage.OnlineAssessment:
      return "OnlineAssessment";
    case Stage.Interview:
      return "Interview";
    case Stage.Interview2:
      return "Interview2";
    case Stage.Interview3:
      return "Interview3";
    case Stage.Offer:
      return "Offer";
    default:
      return "UNKNOWN";
  }
}

export enum Gender {
  CIS_FEMALE = 0,
  CIS_MALE = 1,
  TRANS_FEMALE = 2,
  TRANS_MALE = 3,
  AGENDER = 4,
  GENDER_FLUID = 5,
  BIGENDER = 6,
  OTHER_GENDER = 7,
  UNRECOGNIZED = -1,
}

export function genderFromJSON(object: any): Gender {
  switch (object) {
    case 0:
    case "CIS_FEMALE":
      return Gender.CIS_FEMALE;
    case 1:
    case "CIS_MALE":
      return Gender.CIS_MALE;
    case 2:
    case "TRANS_FEMALE":
      return Gender.TRANS_FEMALE;
    case 3:
    case "TRANS_MALE":
      return Gender.TRANS_MALE;
    case 4:
    case "AGENDER":
      return Gender.AGENDER;
    case 5:
    case "GENDER_FLUID":
      return Gender.GENDER_FLUID;
    case 6:
    case "BIGENDER":
      return Gender.BIGENDER;
    case 7:
    case "OTHER_GENDER":
      return Gender.OTHER_GENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Gender.UNRECOGNIZED;
  }
}

export function genderToJSON(object: Gender): string {
  switch (object) {
    case Gender.CIS_FEMALE:
      return "CIS_FEMALE";
    case Gender.CIS_MALE:
      return "CIS_MALE";
    case Gender.TRANS_FEMALE:
      return "TRANS_FEMALE";
    case Gender.TRANS_MALE:
      return "TRANS_MALE";
    case Gender.AGENDER:
      return "AGENDER";
    case Gender.GENDER_FLUID:
      return "GENDER_FLUID";
    case Gender.BIGENDER:
      return "BIGENDER";
    case Gender.OTHER_GENDER:
      return "OTHER_GENDER";
    default:
      return "UNKNOWN";
  }
}

export enum SexualOrientation {
  HETEROSEXUAL = 0,
  HOMOSEXUAL = 1,
  BISEXUAL = 2,
  ASEXUAL = 3,
  OTHER_SEXUAL_ORIENTATION = 4,
  UNRECOGNIZED = -1,
}

export function sexualOrientationFromJSON(object: any): SexualOrientation {
  switch (object) {
    case 0:
    case "HETEROSEXUAL":
      return SexualOrientation.HETEROSEXUAL;
    case 1:
    case "HOMOSEXUAL":
      return SexualOrientation.HOMOSEXUAL;
    case 2:
    case "BISEXUAL":
      return SexualOrientation.BISEXUAL;
    case 3:
    case "ASEXUAL":
      return SexualOrientation.ASEXUAL;
    case 4:
    case "OTHER_SEXUAL_ORIENTATION":
      return SexualOrientation.OTHER_SEXUAL_ORIENTATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SexualOrientation.UNRECOGNIZED;
  }
}

export function sexualOrientationToJSON(object: SexualOrientation): string {
  switch (object) {
    case SexualOrientation.HETEROSEXUAL:
      return "HETEROSEXUAL";
    case SexualOrientation.HOMOSEXUAL:
      return "HOMOSEXUAL";
    case SexualOrientation.BISEXUAL:
      return "BISEXUAL";
    case SexualOrientation.ASEXUAL:
      return "ASEXUAL";
    case SexualOrientation.OTHER_SEXUAL_ORIENTATION:
      return "OTHER_SEXUAL_ORIENTATION";
    default:
      return "UNKNOWN";
  }
}

export enum RacialOrigin {
  AMERICAN_INDIAN = 0,
  ASIAN = 1,
  AFRICAN_AMERICAN = 2,
  HISPANIC = 3,
  WHITE = 4,
  OTHER_RACIAL_ORIGIN = 5,
  UNRECOGNIZED = -1,
}

export function racialOriginFromJSON(object: any): RacialOrigin {
  switch (object) {
    case 0:
    case "AMERICAN_INDIAN":
      return RacialOrigin.AMERICAN_INDIAN;
    case 1:
    case "ASIAN":
      return RacialOrigin.ASIAN;
    case 2:
    case "AFRICAN_AMERICAN":
      return RacialOrigin.AFRICAN_AMERICAN;
    case 3:
    case "HISPANIC":
      return RacialOrigin.HISPANIC;
    case 4:
    case "WHITE":
      return RacialOrigin.WHITE;
    case 5:
    case "OTHER_RACIAL_ORIGIN":
      return RacialOrigin.OTHER_RACIAL_ORIGIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RacialOrigin.UNRECOGNIZED;
  }
}

export function racialOriginToJSON(object: RacialOrigin): string {
  switch (object) {
    case RacialOrigin.AMERICAN_INDIAN:
      return "AMERICAN_INDIAN";
    case RacialOrigin.ASIAN:
      return "ASIAN";
    case RacialOrigin.AFRICAN_AMERICAN:
      return "AFRICAN_AMERICAN";
    case RacialOrigin.HISPANIC:
      return "HISPANIC";
    case RacialOrigin.WHITE:
      return "WHITE";
    case RacialOrigin.OTHER_RACIAL_ORIGIN:
      return "OTHER_RACIAL_ORIGIN";
    default:
      return "UNKNOWN";
  }
}

export enum VisaStatus {
  NATIONAL = 0,
  VISA_HOLDER = 1,
  NO_STATUS = 2,
  UNRECOGNIZED = -1,
}

export function visaStatusFromJSON(object: any): VisaStatus {
  switch (object) {
    case 0:
    case "NATIONAL":
      return VisaStatus.NATIONAL;
    case 1:
    case "VISA_HOLDER":
      return VisaStatus.VISA_HOLDER;
    case 2:
    case "NO_STATUS":
      return VisaStatus.NO_STATUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VisaStatus.UNRECOGNIZED;
  }
}

export function visaStatusToJSON(object: VisaStatus): string {
  switch (object) {
    case VisaStatus.NATIONAL:
      return "NATIONAL";
    case VisaStatus.VISA_HOLDER:
      return "VISA_HOLDER";
    case VisaStatus.NO_STATUS:
      return "NO_STATUS";
    default:
      return "UNKNOWN";
  }
}

export enum MarriageStatus {
  SINGLE = 0,
  MARRIED = 1,
  DIVORCED = 2,
  WIDOWED = 3,
  OTHER_MARITAL_STATUS = 4,
  UNRECOGNIZED = -1,
}

export function marriageStatusFromJSON(object: any): MarriageStatus {
  switch (object) {
    case 0:
    case "SINGLE":
      return MarriageStatus.SINGLE;
    case 1:
    case "MARRIED":
      return MarriageStatus.MARRIED;
    case 2:
    case "DIVORCED":
      return MarriageStatus.DIVORCED;
    case 3:
    case "WIDOWED":
      return MarriageStatus.WIDOWED;
    case 4:
    case "OTHER_MARITAL_STATUS":
      return MarriageStatus.OTHER_MARITAL_STATUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MarriageStatus.UNRECOGNIZED;
  }
}

export function marriageStatusToJSON(object: MarriageStatus): string {
  switch (object) {
    case MarriageStatus.SINGLE:
      return "SINGLE";
    case MarriageStatus.MARRIED:
      return "MARRIED";
    case MarriageStatus.DIVORCED:
      return "DIVORCED";
    case MarriageStatus.WIDOWED:
      return "WIDOWED";
    case MarriageStatus.OTHER_MARITAL_STATUS:
      return "OTHER_MARITAL_STATUS";
    default:
      return "UNKNOWN";
  }
}

export enum EducationLevel {
  NO_EDUCATION = 0,
  HIGH_SCHOOL = 1,
  ASSOCIATES = 2,
  BACHELORS = 3,
  MASTERS = 4,
  DOCTORATE = 5,
  OTHER_EDUCATION = 6,
  UNRECOGNIZED = -1,
}

export function educationLevelFromJSON(object: any): EducationLevel {
  switch (object) {
    case 0:
    case "NO_EDUCATION":
      return EducationLevel.NO_EDUCATION;
    case 1:
    case "HIGH_SCHOOL":
      return EducationLevel.HIGH_SCHOOL;
    case 2:
    case "ASSOCIATES":
      return EducationLevel.ASSOCIATES;
    case 3:
    case "BACHELORS":
      return EducationLevel.BACHELORS;
    case 4:
    case "MASTERS":
      return EducationLevel.MASTERS;
    case 5:
    case "DOCTORATE":
      return EducationLevel.DOCTORATE;
    case 6:
    case "OTHER_EDUCATION":
      return EducationLevel.OTHER_EDUCATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EducationLevel.UNRECOGNIZED;
  }
}

export function educationLevelToJSON(object: EducationLevel): string {
  switch (object) {
    case EducationLevel.NO_EDUCATION:
      return "NO_EDUCATION";
    case EducationLevel.HIGH_SCHOOL:
      return "HIGH_SCHOOL";
    case EducationLevel.ASSOCIATES:
      return "ASSOCIATES";
    case EducationLevel.BACHELORS:
      return "BACHELORS";
    case EducationLevel.MASTERS:
      return "MASTERS";
    case EducationLevel.DOCTORATE:
      return "DOCTORATE";
    case EducationLevel.OTHER_EDUCATION:
      return "OTHER_EDUCATION";
    default:
      return "UNKNOWN";
  }
}

export interface SubmitApplicationStatus {
  companyName: string;
  stage: Stage;
  jobTitle: string;
  hourlyCompensation: number;
  dateOfDecision: number;
  gender: Gender;
  sexualOrientation: SexualOrientation;
  racialOrigin: RacialOrigin;
  visaStatus: VisaStatus;
  nationality: string;
  disability: boolean;
  veteranStatus: boolean;
  criminalBackground: boolean;
  indigenous: boolean;
  marriageStatus: MarriageStatus;
  educationLevel: EducationLevel;
  graduated: boolean;
  yearsOfExperience: number;
  coOpTerm: number;
  gpa: number;
}

export interface CompanyStatsRequest {
  interestedAttributes: string[];
  jobTitleFilter: string;
}

function createBaseSubmitApplicationStatus(): SubmitApplicationStatus {
  return {
    companyName: "",
    stage: 0,
    jobTitle: "",
    hourlyCompensation: 0,
    dateOfDecision: 0,
    gender: 0,
    sexualOrientation: 0,
    racialOrigin: 0,
    visaStatus: 0,
    nationality: "",
    disability: false,
    veteranStatus: false,
    criminalBackground: false,
    indigenous: false,
    marriageStatus: 0,
    educationLevel: 0,
    graduated: false,
    yearsOfExperience: 0,
    coOpTerm: 0,
    gpa: 0,
  };
}

export const SubmitApplicationStatus = {
  encode(
    message: SubmitApplicationStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.companyName !== "") {
      writer.uint32(10).string(message.companyName);
    }
    if (message.stage !== 0) {
      writer.uint32(16).int32(message.stage);
    }
    if (message.jobTitle !== "") {
      writer.uint32(26).string(message.jobTitle);
    }
    if (message.hourlyCompensation !== 0) {
      writer.uint32(32).int32(message.hourlyCompensation);
    }
    if (message.dateOfDecision !== 0) {
      writer.uint32(40).int64(message.dateOfDecision);
    }
    if (message.gender !== 0) {
      writer.uint32(48).int32(message.gender);
    }
    if (message.sexualOrientation !== 0) {
      writer.uint32(56).int32(message.sexualOrientation);
    }
    if (message.racialOrigin !== 0) {
      writer.uint32(64).int32(message.racialOrigin);
    }
    if (message.visaStatus !== 0) {
      writer.uint32(72).int32(message.visaStatus);
    }
    if (message.nationality !== "") {
      writer.uint32(82).string(message.nationality);
    }
    if (message.disability === true) {
      writer.uint32(88).bool(message.disability);
    }
    if (message.veteranStatus === true) {
      writer.uint32(96).bool(message.veteranStatus);
    }
    if (message.criminalBackground === true) {
      writer.uint32(104).bool(message.criminalBackground);
    }
    if (message.indigenous === true) {
      writer.uint32(112).bool(message.indigenous);
    }
    if (message.marriageStatus !== 0) {
      writer.uint32(120).int32(message.marriageStatus);
    }
    if (message.educationLevel !== 0) {
      writer.uint32(128).int32(message.educationLevel);
    }
    if (message.graduated === true) {
      writer.uint32(136).bool(message.graduated);
    }
    if (message.yearsOfExperience !== 0) {
      writer.uint32(144).int32(message.yearsOfExperience);
    }
    if (message.coOpTerm !== 0) {
      writer.uint32(152).int32(message.coOpTerm);
    }
    if (message.gpa !== 0) {
      writer.uint32(161).double(message.gpa);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitApplicationStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitApplicationStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.companyName = reader.string();
          break;
        case 2:
          message.stage = reader.int32() as any;
          break;
        case 3:
          message.jobTitle = reader.string();
          break;
        case 4:
          message.hourlyCompensation = reader.int32();
          break;
        case 5:
          message.dateOfDecision = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.gender = reader.int32() as any;
          break;
        case 7:
          message.sexualOrientation = reader.int32() as any;
          break;
        case 8:
          message.racialOrigin = reader.int32() as any;
          break;
        case 9:
          message.visaStatus = reader.int32() as any;
          break;
        case 10:
          message.nationality = reader.string();
          break;
        case 11:
          message.disability = reader.bool();
          break;
        case 12:
          message.veteranStatus = reader.bool();
          break;
        case 13:
          message.criminalBackground = reader.bool();
          break;
        case 14:
          message.indigenous = reader.bool();
          break;
        case 15:
          message.marriageStatus = reader.int32() as any;
          break;
        case 16:
          message.educationLevel = reader.int32() as any;
          break;
        case 17:
          message.graduated = reader.bool();
          break;
        case 18:
          message.yearsOfExperience = reader.int32();
          break;
        case 19:
          message.coOpTerm = reader.int32();
          break;
        case 20:
          message.gpa = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitApplicationStatus {
    return {
      companyName: isSet(object.companyName) ? String(object.companyName) : "",
      stage: isSet(object.stage) ? stageFromJSON(object.stage) : 0,
      jobTitle: isSet(object.jobTitle) ? String(object.jobTitle) : "",
      hourlyCompensation: isSet(object.hourlyCompensation)
        ? Number(object.hourlyCompensation)
        : 0,
      dateOfDecision: isSet(object.dateOfDecision)
        ? Number(object.dateOfDecision)
        : 0,
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
      sexualOrientation: isSet(object.sexualOrientation)
        ? sexualOrientationFromJSON(object.sexualOrientation)
        : 0,
      racialOrigin: isSet(object.racialOrigin)
        ? racialOriginFromJSON(object.racialOrigin)
        : 0,
      visaStatus: isSet(object.visaStatus)
        ? visaStatusFromJSON(object.visaStatus)
        : 0,
      nationality: isSet(object.nationality) ? String(object.nationality) : "",
      disability: isSet(object.disability) ? Boolean(object.disability) : false,
      veteranStatus: isSet(object.veteranStatus)
        ? Boolean(object.veteranStatus)
        : false,
      criminalBackground: isSet(object.criminalBackground)
        ? Boolean(object.criminalBackground)
        : false,
      indigenous: isSet(object.indigenous) ? Boolean(object.indigenous) : false,
      marriageStatus: isSet(object.marriageStatus)
        ? marriageStatusFromJSON(object.marriageStatus)
        : 0,
      educationLevel: isSet(object.educationLevel)
        ? educationLevelFromJSON(object.educationLevel)
        : 0,
      graduated: isSet(object.graduated) ? Boolean(object.graduated) : false,
      yearsOfExperience: isSet(object.yearsOfExperience)
        ? Number(object.yearsOfExperience)
        : 0,
      coOpTerm: isSet(object.coOpTerm) ? Number(object.coOpTerm) : 0,
      gpa: isSet(object.gpa) ? Number(object.gpa) : 0,
    };
  },

  toJSON(message: SubmitApplicationStatus): unknown {
    const obj: any = {};
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.stage !== undefined && (obj.stage = stageToJSON(message.stage));
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.hourlyCompensation !== undefined &&
      (obj.hourlyCompensation = Math.round(message.hourlyCompensation));
    message.dateOfDecision !== undefined &&
      (obj.dateOfDecision = Math.round(message.dateOfDecision));
    message.gender !== undefined && (obj.gender = genderToJSON(message.gender));
    message.sexualOrientation !== undefined &&
      (obj.sexualOrientation = sexualOrientationToJSON(
        message.sexualOrientation
      ));
    message.racialOrigin !== undefined &&
      (obj.racialOrigin = racialOriginToJSON(message.racialOrigin));
    message.visaStatus !== undefined &&
      (obj.visaStatus = visaStatusToJSON(message.visaStatus));
    message.nationality !== undefined &&
      (obj.nationality = message.nationality);
    message.disability !== undefined && (obj.disability = message.disability);
    message.veteranStatus !== undefined &&
      (obj.veteranStatus = message.veteranStatus);
    message.criminalBackground !== undefined &&
      (obj.criminalBackground = message.criminalBackground);
    message.indigenous !== undefined && (obj.indigenous = message.indigenous);
    message.marriageStatus !== undefined &&
      (obj.marriageStatus = marriageStatusToJSON(message.marriageStatus));
    message.educationLevel !== undefined &&
      (obj.educationLevel = educationLevelToJSON(message.educationLevel));
    message.graduated !== undefined && (obj.graduated = message.graduated);
    message.yearsOfExperience !== undefined &&
      (obj.yearsOfExperience = Math.round(message.yearsOfExperience));
    message.coOpTerm !== undefined &&
      (obj.coOpTerm = Math.round(message.coOpTerm));
    message.gpa !== undefined && (obj.gpa = message.gpa);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitApplicationStatus>, I>>(
    object: I
  ): SubmitApplicationStatus {
    const message = createBaseSubmitApplicationStatus();
    message.companyName = object.companyName ?? "";
    message.stage = object.stage ?? 0;
    message.jobTitle = object.jobTitle ?? "";
    message.hourlyCompensation = object.hourlyCompensation ?? 0;
    message.dateOfDecision = object.dateOfDecision ?? 0;
    message.gender = object.gender ?? 0;
    message.sexualOrientation = object.sexualOrientation ?? 0;
    message.racialOrigin = object.racialOrigin ?? 0;
    message.visaStatus = object.visaStatus ?? 0;
    message.nationality = object.nationality ?? "";
    message.disability = object.disability ?? false;
    message.veteranStatus = object.veteranStatus ?? false;
    message.criminalBackground = object.criminalBackground ?? false;
    message.indigenous = object.indigenous ?? false;
    message.marriageStatus = object.marriageStatus ?? 0;
    message.educationLevel = object.educationLevel ?? 0;
    message.graduated = object.graduated ?? false;
    message.yearsOfExperience = object.yearsOfExperience ?? 0;
    message.coOpTerm = object.coOpTerm ?? 0;
    message.gpa = object.gpa ?? 0;
    return message;
  },
};

function createBaseCompanyStatsRequest(): CompanyStatsRequest {
  return { interestedAttributes: [], jobTitleFilter: "" };
}

export const CompanyStatsRequest = {
  encode(
    message: CompanyStatsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.interestedAttributes) {
      writer.uint32(10).string(v!);
    }
    if (message.jobTitleFilter !== "") {
      writer.uint32(18).string(message.jobTitleFilter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompanyStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompanyStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interestedAttributes.push(reader.string());
          break;
        case 2:
          message.jobTitleFilter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyStatsRequest {
    return {
      interestedAttributes: Array.isArray(object?.interestedAttributes)
        ? object.interestedAttributes.map((e: any) => String(e))
        : [],
      jobTitleFilter: isSet(object.jobTitleFilter)
        ? String(object.jobTitleFilter)
        : "",
    };
  },

  toJSON(message: CompanyStatsRequest): unknown {
    const obj: any = {};
    if (message.interestedAttributes) {
      obj.interestedAttributes = message.interestedAttributes.map((e) => e);
    } else {
      obj.interestedAttributes = [];
    }
    message.jobTitleFilter !== undefined &&
      (obj.jobTitleFilter = message.jobTitleFilter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompanyStatsRequest>, I>>(
    object: I
  ): CompanyStatsRequest {
    const message = createBaseCompanyStatsRequest();
    message.interestedAttributes =
      object.interestedAttributes?.map((e) => e) || [];
    message.jobTitleFilter = object.jobTitleFilter ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
