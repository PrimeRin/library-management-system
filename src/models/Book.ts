import type { Borrowing } from "./Borrowing"

export interface Book {
  id: number
  title: string
  isbn: string
  authorName: string

  borrowings?: Borrowing[]
}
