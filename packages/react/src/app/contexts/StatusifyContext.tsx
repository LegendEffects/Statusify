import Statusify from "@statusify/core";
import React from "react";

const StatusifyContext = React.createContext<Statusify>(null as any);

export function StatusifyProvider({ children, statusify }: { children?: React.ReactNode, statusify: Statusify}) {
  const computedStatusify = React.useMemo(() => {
    return statusify;
  }, [ statusify ]);
  return (
    <StatusifyContext.Provider value={computedStatusify}>
      {children}
    </StatusifyContext.Provider>
  )
}

export function useStatusify() {
  const context = React.useContext(StatusifyContext);

  if(context === undefined) {
    throw new Error('useStatusify must be used within a StatusifyProvider')
  }

  return context;
}