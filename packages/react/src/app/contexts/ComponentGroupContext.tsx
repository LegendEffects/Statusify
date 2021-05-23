import { ANONYMOUS, COLLAPSED, COLLAPSIBLE } from "../constants/FrontendOptions";

import { AttributeStorageType } from "@statusify/core/dist/Util/AttributeStorage";
import ComponentGroup from "@statusify/core/dist/Component/ComponentGroup";
import React from "react";

export interface ComponentGroupState {
  group: ComponentGroup;
  attributes: AttributeStorageType;

  isAnonymous: boolean;
  isCollapsible: boolean;
  collapsed: boolean;
}

type ComponentGroupAction = 
  | { type: 'expand' }
  | { type: 'collapse' }
  | { type: 'toggle' }
  | { type: 'setCollapsed',  value: boolean }
  | { type: 'setAttributes', value: AttributeStorageType }
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
    case 'setAttributes':
      return {
        ...state,
        attributes: action.value,

        isCollapsible: action.value[COLLAPSIBLE] ?? true,
        isAnonymous: action.value[ANONYMOUS] ?? false,
      };
  }
}

export function ComponentGroupProvider({ group, children }: {group: ComponentGroup, children?: React.ReactNode}) {
  const [ state, dispatch ] = React.useReducer(componentGroupReducer, {
    group,
    attributes: {},
    
    isAnonymous: false,
    isCollapsible: true,
    collapsed: true
  });

  React.useEffect(() => {
    let isMounted = true;

    group.getAttributes().then((attributes) => {
      if(!isMounted) {
        return;
      }

      dispatch({ type: 'setAttributes', value: attributes });

      // Set the collapsed flag since we know we've just loaded it
      if(attributes[COLLAPSED] !== undefined) {
        dispatch({ type: 'setCollapsed', value: attributes[COLLAPSED] });
      }
    })

    return () => {
      isMounted = false;
    }
  }, [ group ]);

  return (
    <ComponentGroupContext.Provider value={[ state, dispatch ]}>
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