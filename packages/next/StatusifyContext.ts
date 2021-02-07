import Statusify from '@statusify/core'
import { createContext } from 'react'

const StatusifyContext = createContext<Statusify>(null);

export default StatusifyContext;