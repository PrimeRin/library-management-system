import type { Borrowing } from "./Borrowing"

export interface Penalty {
  id: number
  borrowingId: number
  amount: number
  reason: string
  isPaid: boolean

  borrowing?: Borrowing
}
