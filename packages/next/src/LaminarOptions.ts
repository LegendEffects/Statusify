import { createContext } from "react";
import { LaminarOptions as LaminarOptionsType } from "./Laminar";

export const LaminarOptions = createContext<LaminarOptionsType>(null);

export default LaminarOptions
