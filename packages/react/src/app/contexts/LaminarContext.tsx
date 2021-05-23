import * as React from "react";

import { ChakraProvider, ChakraTheme, ColorModeScript, extendTheme } from "@chakra-ui/react";

import LaminarThemeOptions from "../theme/LaminarThemeOptions";
import { ResponsiveViewboxProvider } from "./ResponsiveViewboxContext";

const LaminarContext = React.createContext<LaminarThemeOptions>(null as any);

export function LaminarProvider({ children, theme }: { children?: React.ReactNode, theme: LaminarThemeOptions }) {
  const chakraTheme = React.useMemo(() => {
    return extendTheme(theme) as ChakraTheme
  }, [ theme ]);

  return (
    <>
      <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
      <ChakraProvider theme={chakraTheme}>
        <LaminarContext.Provider value={theme}>
          <ResponsiveViewboxProvider viewboxes={theme.viewboxes}>
            {children}
          </ResponsiveViewboxProvider>
        </LaminarContext.Provider>
      </ChakraProvider>
    </>
  )
}

export function useLaminar() {
  const context = React.useContext(LaminarContext);
  
  if(context === undefined) {
    throw new Error('useLaminar must be used within a LaminarProvider');
  }

  return context;
}