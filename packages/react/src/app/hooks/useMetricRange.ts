import React from "react";
import dayjs from "dayjs";
import { useResponsiveViewbox } from "../contexts/ResponsiveViewboxContext";

export default function useMetricRange() {
  const viewbox = useResponsiveViewbox();

  const range = React.useMemo(() => {
    return {
      start: dayjs().subtract(viewbox.days, 'days').startOf('day').toDate(),
      end: dayjs().endOf('day').toDate()
    }
  }, [ viewbox ]);

  return range;
}