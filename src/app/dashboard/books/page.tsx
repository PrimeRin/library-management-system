import { BookTable } from "./book-table"
import data from "../data.json"

export default function BooksPage() {
    return (
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <BookTable data={data} />
      </div>
    )
  }
