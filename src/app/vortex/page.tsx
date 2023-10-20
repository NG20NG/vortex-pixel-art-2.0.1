"use client";
import Index from "../../components";
//
import ReduxProvider from "@/redux/provider";
//
const VortexPage = () => {
  return (
    <ReduxProvider>
      <Index />
    </ReduxProvider>
  );
};

export default VortexPage;
