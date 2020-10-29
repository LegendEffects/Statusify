export enum LogTypes {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
};

export type LogTypeConfig = {
  background: string;
  color: string;
}

export type LoggerConfig = {
  strict?: boolean;

  types: {[key in LogTypes]: LogTypeConfig};

  element?: {
    message: string,
    styleComponent: string,
    styleMessage: string
  };

  excludedComponents?: string[];
};

export type LogComponent = {
  message: string;
  styleComponent: string;
  styleMessage: string;
}


// Implementation
const defaultConfig: LoggerConfig = {
  strict: true,
  types: {
    success: {
      background: '#2ecc71',
      color: '#2c3e50'
    },
    info: {
      background: '#95a5a6',
      color: '#000'
    },
    warn: {
      background: '#e67e22',
      color: '#fff'
    },
    error: {
      background: '#e74c3c',
      color: '#fff'
    }
  },

  element: {
    message: '%c ${COMPONENT} %c ${MESSAGE} ',
    styleComponent: 'background: ${BACKGROUND}; color: ${COLOR}; border-radius: 3px 0 0 3px;',
    styleMessage: 'background: #333; color: #fff; border-radius: 0 3px 3px 0;'
  },

  excludedComponents: []
};

export default class Logger {
  private config: LoggerConfig;

  constructor(config?: LoggerConfig) {
    this.config = Object.assign({}, defaultConfig, config);
  }

  // Utility Functions
  public success(component: string, message: string, extra?: any): void {
    this.log(component, message, this.config.types.success, extra);
  }

  public info(component: string, message: string, extra?: any): void {
    this.log(component, message, this.config.types.info, extra);
  }

  public warn(component: string, message: string, extra?: any): void {
    this.log(component, message, this.config.types.warn, extra);
  }

  public error(component: string, message: string, extra?: any): void {
    this.log(component, message, this.config.types.error, extra);
  }

  /**
   * Logs a message at the lowest level
   *
   * @param component {string}
   * @param message {string}
   * @param type {LogTypeConfig}
   */
  public log(component: string, message: string, type: LogTypeConfig, extra?: any): void {
    if(!this.canLog(component)) {
      return;
    }

    const {
      message: parsedMessage,
      styleComponent,
      styleMessage
    } = this.logComponent(component, message, type);

    if(extra) {
      console.group(parsedMessage, styleComponent, styleMessage);
      console.log(extra);
      console.groupEnd();
      return;
    }

    console.log(parsedMessage, styleComponent, styleMessage);
  }

  public group(component: string, message: string, type: LogTypes): void {
    const {
      message: parsedMessage,
      styleComponent,
      styleMessage
    } = this.logComponent(component, message, this.config.types[type]);

    console.group(parsedMessage, styleComponent, styleMessage);
  }

  public endGroup() {
    console.groupEnd();
  }

  private logComponent(component: string, message: string, type: LogTypeConfig): LogComponent {
    const parsedMessage = this.config.element?.message
      .replace('${MESSAGE}', message)
      .replace('${COMPONENT}', component) || '';

    const parsedStyling = this.config.element?.styleComponent
      .replace('${BACKGROUND}', type.background)
      .replace('${COLOR}', type.color) || '';

    return {
      message: parsedMessage,
      styleComponent: parsedStyling,
      styleMessage: this.config.element?.styleMessage || ''
    };
  }

  /**
   * Checks if the component is loggable in the current environment
   *
   * @param component {string}
   */
  private canLog(component: string): boolean {
    if(this.config.strict && process.env.NODE_ENV !== 'development') {
      return false; // Don't allow any logging in production if it's in strict mode
    }

    if(this.config.excludedComponents && this.config.excludedComponents.includes(component)) {
      return false; // It's in the excluded components list
    }

    return true;
  }
}
