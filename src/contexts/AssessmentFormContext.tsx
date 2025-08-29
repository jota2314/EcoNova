'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const AssessmentFormContext = createContext<AssessmentFormContextType | undefined>(undefined);

export function AssessmentFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <AssessmentFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </AssessmentFormContext.Provider>
  );
}

export function useAssessmentForm() {
  const context = useContext(AssessmentFormContext);
  if (context === undefined) {
    throw new Error('useAssessmentForm must be used within an AssessmentFormProvider');
  }
  return context;
}