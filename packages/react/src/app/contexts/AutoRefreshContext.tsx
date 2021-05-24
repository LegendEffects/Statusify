import React from "react";

export interface IAutoRefreshState {
  interval: number;
  seconds: number;
  lastUpdate: Date;
}

type AutoRefreshAction =
  | { type: 'INCREMENT' }
  | { type: 'SET_SECONDS', value: number }
  | { type: 'SET_LAST_UPDATE', value: Date }
  ;

const AutoRefreshContext = React.createContext<[
  IAutoRefreshState,
  React.Dispatch<AutoRefreshAction>
]>(undefined as any);

function autoRefreshReducer(state: IAutoRefreshState, action: AutoRefreshAction): IAutoRefreshState {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        seconds: (state.seconds === 0 ? state.interval : state.seconds - 1)
      };
    case 'SET_SECONDS':
      return {
        ...state,
        seconds: action.value
      };
    case 'SET_LAST_UPDATE':
      return {
        ...state,
        lastUpdate: action.value
      }
    default:
      return state;
  }
}

export interface AutoRefreshProviderProps {
  interval: number;
  refreshListener: () => void;
}

export const AutoRefreshProvider: React.FC<AutoRefreshProviderProps> = ({ children, interval, refreshListener }) => {
  const [ state, dispatch ] = React.useReducer(autoRefreshReducer, {
    interval: interval,
    seconds: interval,
    lastUpdate: new Date(),
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    if(state.seconds === 0) {
      dispatch({ type: 'SET_LAST_UPDATE', value: new Date() });
      refreshListener();
    }
  }, [ state.seconds, refreshListener ]);

  return (
    <AutoRefreshContext.Provider value={[ state, dispatch ]}>
      {children}
    </AutoRefreshContext.Provider>
  )
}

export function useAutoRefresh() {
  const context = React.useContext(AutoRefreshContext);

  if(context === undefined) {
    throw new Error('useAutoRefresh must be used within a UsedRefreshProvider');
  }

  return context;
}