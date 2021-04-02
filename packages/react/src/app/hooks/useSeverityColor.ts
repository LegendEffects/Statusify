import Severity from "@statusify/core/dist/Severity/Severity";
import { useLaminar } from "../contexts/LaminarContext";

export default function useSeverityColor(severity?: Severity, fallback: string = 'transparent') {
  const { severityColors } = useLaminar();

  if(!severity) {
    return fallback;
  }

  return severityColors[severity.id] || fallback;
}