import config from "~/config";

function findSeverityIndex(name: string) {
  return config.severityRatings.findIndex(r => (r.name === name));
}

// Worse is at the top of the list
function isWorseThan(rating: string, that: string) {
  return findSeverityIndex(rating) < findSeverityIndex(that);
}

function findSeverityFromPercentage(percentage: number) {
  return config.severityRatings
    .filter(r => r.percentage !== undefined)
    .reduce((max, rating) => {
      if((rating.percentage as number) <= percentage && (max.percentage as number) < rating.percentage) {
        return rating;
      }

      return max;
  });
}


export {
  findSeverityIndex,
  isWorseThan,
  findSeverityFromPercentage
}
