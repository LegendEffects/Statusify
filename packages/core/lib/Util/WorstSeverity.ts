import Statusify from "..";
import Severity from "../Severity/Severity";

export default async function WorstSeverity(severities: Severity[], statusify: Statusify) {
  const allSeverities = await statusify.getSeverities()
  let currentWorst = 0

  for(const severity of severities) {
    const index = allSeverities.findIndex((cSev) => cSev.id === severity.id)
    currentWorst = (index > currentWorst) ? index : currentWorst
  }

  return allSeverities[currentWorst]
}
