import React from "react";
import StatusifyEvents from "@statusify/core/dist/Util/StatusifyEvents";
import { useStatusify } from "../contexts/StatusifyContext";

export default function useStatusifyEvent(event: keyof StatusifyEvents, callback: StatusifyEvents[typeof event]) {
  const statusify = useStatusify();

  const memoizedCallback = React.useMemo(() => {
    return callback;
  }, [ callback ]);

  React.useEffect(() => {
    statusify.on(event, memoizedCallback);

    return () => {
      statusify.removeListener(event, memoizedCallback);
    }
  }, [ statusify, event, memoizedCallback ]);
}