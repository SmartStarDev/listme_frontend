export enum CVJourneySteps {
  START,
  HEADER,
  EXPERIENCE,
  EDUCATION,
  SKILL,
  SUMMARY,
  LANGUAGE,
  FINALIZE,
}

export interface CVHeader {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  phone: string;
  email: string;
}

export interface CVExperience {
  jobTitle: string;
  employer: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  isWorkNow: boolean;
  description: string;
}

export interface CVEducation {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  graduationDate: string;
  fieldOfStudy: string;
  enrolled: boolean;
}

export interface CVLanguage {
  name: string;
  level: number;
}

export interface CVData {
  header: CVHeader;
  experiences: CVExperience[];
  education: CVEducation;
  skills: CVSkill[];
  summary: string;
  languages: CVLanguage[];
}

export interface CVSkill {
  name: string;
}
