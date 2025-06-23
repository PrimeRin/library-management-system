import type { Class } from "./Class"
import type { Borrowing } from "./Borrowing"
import type { Role, Gender } from "./enums"

export interface User {
  id: number
  name: string
  email?: string | null
  role: Role
  gender: Gender
  password?: string | null
  phoneNo?: string | null
  classId?: number | null

  class?: Class | null
  borrowings?: Borrowing[]
}
