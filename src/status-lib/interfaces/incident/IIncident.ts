import { IContentDocument } from '@nuxt/content/types/content'

export default interface IIncident extends IContentDocument {
  /**
   * Title of the incident
   */
  title: string

  /**
   * OPTIONAL (May not be defined)
   * Overrides date of creation (createdAt)
   */
  date?: Date

  /**
   * OPTIONAL (May not be defined)
   * Date that it was resolved or false if it wasn't
   */
  resolved?: Date | boolean

  /**
   * Severity of the issue, should use ID of the severity
   */
  severity: string

  /**
   * Slugs of affected services
   */
  affected: string[]
}
