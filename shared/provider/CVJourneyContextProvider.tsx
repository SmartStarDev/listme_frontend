import { createContext, PropsWithChildren, useState } from "react";
import {
  CVJourneySteps,
  CVData,
  CVHeader,
  CVExperience,
  CVEducation,
  CVLanguage,
  CVSkill,
} from "@/shared/types";
import { createUser, updateUser } from "@/shared/api";
import { generateUserData } from "@/shared/utils";

type CVJourneyContextProps = PropsWithChildren<any>;

const initialCV: CVData = {
  header: {} as CVHeader,
  experiences: [],
  education: {} as CVEducation,
  skills: [],
  summary: "",
  languages: [],
};

const initialStates = {
  userId: null,

  step: CVJourneySteps.START,
  cvData: initialCV,

  setStep: () => {},
  setCVData: () => {},
  setCVHeader: () => {},
  setCVExperience: () => {},
  setCVEducation: () => {},
  setCVSkills: () => {},
  setCVSummary: () => {},
  setCVLanguages: () => {},
};

type CVJourneyContextType = {
  userId: string | null;

  step: CVJourneySteps;
  cvData: CVData;

  setStep: (step: CVJourneySteps) => void;
  setCVData: (data: CVData) => void;
  setCVHeader: (data: CVHeader) => void;
  setCVExperience: (data: CVExperience[]) => void;
  setCVEducation: (data: CVEducation) => void;
  setCVSkills: (data: CVSkill[]) => void;
  setCVSummary: (data: string) => void;
  setCVLanguages: (data: CVLanguage[]) => void;
};

export const CVJourneyContext =
  createContext<CVJourneyContextType>(initialStates);

export const CVJourneyContextProvider = ({
  children,
}: CVJourneyContextProps) => {
  const [userId, setUserId] = useState(() => window.localStorage.getItem('cv_userId') ?? null);
  const [step, setStep] = useState<CVJourneySteps>(CVJourneySteps.START);

  const [isOnboarding, setIsOnboarding] = useState(false);

  const [cvData, setCVData] = useState<CVData>(initialCV);

  const setCVHeader = async (payload: CVHeader) => {
    setCVData({
      ...cvData,
      header: payload,
    });

    if (isOnboarding && userId) {
      await updateUser(userId, payload);
    } else {
      setIsOnboarding(true);

      const result = await createUser(payload);
      setUserId(result._id);
      window.localStorage.setItem('cv_userId', result._id);
    }

    setStep(CVJourneySteps.EXPERIENCE);
  };

  const setCVExperience = async (payload: CVExperience[]) => {
    const data = {
      ...cvData,
      experiences: payload,
    };

    setCVData(data);

    if (userId) {
      await updateUser(userId, generateUserData(data));

      setStep(CVJourneySteps.EDUCATION);
    }
  };

  const setCVEducation = async (payload: CVEducation) => {
    const data = {
      ...cvData,
      education: payload,
    }

    setCVData(data);

    if (userId) {
      await updateUser(userId, generateUserData(data));
      setStep(CVJourneySteps.SKILL);
    }
  };

  const setCVSkills = async (payload: CVSkill[]) => {
    const data = {
      ...cvData,
      skills: payload,
    }

    setCVData(data);

    if (userId) {
      await updateUser(userId, generateUserData(data));
      setStep(CVJourneySteps.SUMMARY);
    }
  };

  const setCVSummary = async (payload: string) => {
    const data = {
      ...cvData,
      summary: payload,
    }

    setCVData(data);

    if (userId) {
      await updateUser(userId, generateUserData(data));
      setStep(CVJourneySteps.LANGUAGE);
    }
  };

  const setCVLanguages = async (payload: CVLanguage[]) => {
    const data = {
      ...cvData,
      languages: payload,
    }

    setCVData(data);

    if (userId) {
      await updateUser(userId, generateUserData(data));
      setStep(CVJourneySteps.FINALIZE);
    }
  };

  return (
    <CVJourneyContext.Provider
      value={{
        userId,
        step,
        cvData,
        setStep,
        setCVData,
        setCVHeader,
        setCVExperience,
        setCVEducation,
        setCVSkills,
        setCVSummary,
        setCVLanguages,
      }}
    >
      {children}
    </CVJourneyContext.Provider>
  );
};
