import type { User } from "./User"

export interface Class {
  id: number
  className: string

  students?: User[]
}
