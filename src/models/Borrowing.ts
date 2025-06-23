import type { User } from "./User"
import type { Book } from "./Book"
import type { Penalty } from "./Penalty"
import type { BorrowingStatus } from "./enums"

export interface Borrowing {
  id: number
  userId: number
  bookId: number
  issuedDate: Date
  dueDate: Date
  returnedDate?: Date | null
  status: BorrowingStatus
  renewalCount: number

  user?: User
  book?: Book
  penalties?: Penalty[]
}
