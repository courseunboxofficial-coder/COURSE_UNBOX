"use client";
import React, { createContext, useContext, useState } from "react";
import { EnrollmentModal } from "../components/landingPage/EnrollmentModal";

const CheckoutContext = createContext({
  openEnrollment: () => {},
});

export const useCheckout = () => useContext(CheckoutContext);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {

  const [isEnrollmentOpen, setEnrollmentOpen] = useState(false);

  return (
    <CheckoutContext.Provider
      value={{
        openEnrollment: () => setEnrollmentOpen(true),
      }}
    >
      {children}
   
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
      />
    </CheckoutContext.Provider>
  );
}
