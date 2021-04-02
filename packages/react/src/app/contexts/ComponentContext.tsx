import Component from "@statusify/core/dist/Component/Component";
import React from "react";

const ComponentContext = React.createContext<Component>(undefined as any);

export function ComponentProvider({ component, children }: {component: Component, children?: React.ReactNode}) {
  const value = React.useMemo(() => component, [ component ]);

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponent() {
  const context = React.useContext(ComponentContext);

  if(context === undefined) {
    throw new Error('useComponent must be used within a ComponentProvider');
  }

  return context;
}



