import React from 'react';
import Severity from '@statusify/core/dist/Severity/Severity';
import { useStatusify } from '../contexts/StatusifyContext';

export default function useGlobalSeverity() {
  const [ severity, setSeverity ] = React.useState<Severity>();

  const statusify = useStatusify();

  React.useEffect(() => {
    statusify?.getGlobalSeverity().then(setSeverity);
  }, [ statusify ]);

  return severity;
}
