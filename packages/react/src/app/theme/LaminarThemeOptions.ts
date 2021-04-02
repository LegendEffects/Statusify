import { ThemeOverride } from "@chakra-ui/react"
import { ViewboxEntry } from "../contexts/ResponsiveViewboxContext";

export default interface LaminarThemeOptions extends ThemeOverride {
  // Maps a severity ID to a Chakra Color name
  severityColors: {[id: string]: string};
  
  // Maps an downtime length (seconds) to a severity
  downtimeSeverities: {[id: number]: string};

  viewboxes: ViewboxEntry[];
}