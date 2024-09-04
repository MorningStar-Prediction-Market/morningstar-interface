"use client";
import UIKitProvider from "@/packages/@ui-kit/UIKitProvider";
import React from "react";
import TanstackProvider from "./TanstackProvider";


const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <TanstackProvider>
      <UIKitProvider>
       {children}
      </UIKitProvider>
    </TanstackProvider>
  );
};

export default AppProvider;
