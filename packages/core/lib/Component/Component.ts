export interface ComponentCParams {
  id: string
  name: string
  description?: string
}

export default class Component {
  /**
   * ID of the component
   */
  public readonly id: string;
  
  /**
   * Name of the component
   */
  public readonly name: string;

  /**
   * Description of the component
   */
  public readonly description?: string;

  
  //
  // Constructor
  //
  constructor({ id, name, description }: ComponentCParams) {
    this.id = id
    this.name = name
    this.description = description
  }
}