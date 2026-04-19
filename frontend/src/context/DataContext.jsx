import React, { createContext, useContext, useMemo } from "react";
import {
  initialProjects,
  initialServices,
  initialTestimonials,
  initialStats,
  initialContact,
  techStack,
} from "../mock/mock";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const value = useMemo(
    () => ({
      projects: initialProjects,
      services: initialServices,
      testimonials: initialTestimonials,
      stats: initialStats,
      contact: initialContact,
      techStack,
    }),
    []
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within DataProvider");
  return ctx;
};
