import React, { useEffect } from "react";

export interface ViewboxEntry {
  width: number;
  days: number;
  box: string;
}

export interface ResponsiveViewboxProviderProps {
  children?: React.ReactNode;
  viewboxes: ViewboxEntry[];
}


const ResponsiveViewboxContext = React.createContext<ViewboxEntry>(undefined);

export function ResponsiveViewboxProvider({ children, viewboxes }: ResponsiveViewboxProviderProps) {
  const [ viewbox, setViewbox ] = React.useState<ViewboxEntry>(viewboxes[0]);
  
  useEffect(() => {
    const handleResize = () => {
      setViewbox(viewboxes.find(v => window.innerWidth >= v.width) || viewboxes[0]);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [ viewboxes ]);

  return (
    <ResponsiveViewboxContext.Provider value={viewbox}>
      {children}
    </ResponsiveViewboxContext.Provider>
  )
}

export function useResponsiveViewbox() {
  const context = React.useContext(ResponsiveViewboxContext);

  if(context === undefined) {
    throw new Error('useResponsiveViewbox must be used within a ResponsiveViewboxProvider');
  }

  return context;
}

