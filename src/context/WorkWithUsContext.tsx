import React, { createContext, useContext, useState } from 'react';

interface WorkWithUsContextType {
  isOpen: boolean;
  selectedService: string | undefined;
  openWorkWithUs: (serviceName?: string) => void;
  closeWorkWithUs: () => void;
}

const WorkWithUsContext = createContext<WorkWithUsContextType | undefined>(undefined);

export const WorkWithUsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openWorkWithUs = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeWorkWithUs = () => {
    setIsOpen(false);
    setSelectedService(undefined);
  };

  return (
    <WorkWithUsContext.Provider
      value={{
        isOpen,
        selectedService,
        openWorkWithUs,
        closeWorkWithUs,
      }}
    >
      {children}
    </WorkWithUsContext.Provider>
  );
};

export function useWorkWithUs(): WorkWithUsContextType {
  const context = useContext(WorkWithUsContext);
  if (!context) {
    throw new Error('useWorkWithUs must be used within a WorkWithUsProvider');
  }
  return context;
}
