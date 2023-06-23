import {
  CVEducation,
  CVExperience,
  CVHeader,
  CVLanguage,
  CVSkill,
} from "@/shared/types/cv";

export interface User extends CVHeader {
  experiences: CVExperience[];
  education: CVEducation;
  skills: CVSkill[];
  languages: CVLanguage[];
}
