import ComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import React from "react";

export interface ComponentGroupState {
  group: ComponentGroup
  collapsed: boolean
}

type ComponentGroupAction = 
  | { type: 'expand' }
  | { type: 'collapse' }
  | { type: 'toggle' }
  | { type: 'setCollapsed', value: boolean }
  ;

const ComponentGroupContext = React.createContext<[
  ComponentGroupState,
  React.Dispatch<ComponentGroupAction>,
]>(undefined as any);

function componentGroupReducer(state: ComponentGroupState, action: ComponentGroupAction): ComponentGroupState {
  switch(action.type) {
    case 'expand':
      return { ...state, collapsed: false };
    case 'collapse':
      return { ...state, collapsed: true };
    case 'toggle':
      return { ...state, collapsed: !state.collapsed };
    case 'setCollapsed':
      return { ...state, collapsed: action.value };
  }
}

export function ComponentGroupProvider({ group, children }: {group: ComponentGroup, children?: React.ReactNode}) {
  const value = React.useReducer(componentGroupReducer, {
    group,
    collapsed: true
  });

  return (
    <ComponentGroupContext.Provider value={value}>
      {children}
    </ComponentGroupContext.Provider>
  )
}

export function useComponentGroup() {
  const context = React.useContext(ComponentGroupContext);

  if(context === undefined) {
    throw new Error('useComponentGroup must be used within a ComponentGroupProvider');
  }

  return context;
}