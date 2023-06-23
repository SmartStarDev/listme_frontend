import { CVData, User } from "@/shared/types";

export const generateUserData = (data: CVData): User => {
  return {
    ...data.header,
    experiences: data.experiences,
    education: data.education,
    skills: [],
    languages: data.languages,
  }
}
