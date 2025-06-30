import { useState } from "react";
import useBooks from "../hooks/useBooks";
import Pagination from "./Pagination";

const AllBooks = () => {
    const { books, isLoading } = useBooks();
      const defaultThumb = "/thumbnail/default.jpg";
    
    const[CurrentPage ,setCurrentPage] = useState(1);
    const postPerPage = 6;
    const firstIndex = (CurrentPage - 1)*postPerPage;
    const lastIndex = firstIndex + postPerPage;
    
      if (isLoading) return <p className="text-center py-10">Loading…</p>;
      const allBooks = books.flatMap(book => book.books);
      
    
      return (
        <div>
        <div className="min-h-[400px] p-5 sm:px-10 lg:px-50">
          <h1 className="text-2xl font-bold">Booklist</h1>
    
          <div className="bookCard grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center  mt-5">
    
            {allBooks.slice(firstIndex,lastIndex).map((book, idx) => (
              <div key={idx} className="bg-gray-50  p-3">
                <img
                  className="h-[130px] w-[90px] mx-auto object-fill"
                  src={book.thumb ? book.thumb : defaultThumb}
                  alt={book.title}
                />
                <h3 className="font-semibold text-center mt-3">
                  {book.title}
                </h3>
                <p className="text-center text-xs mt-1">{book.author}</p>
              </div>
            ))}
          </div>
    <Pagination allBooks={allBooks.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
    
      </div>
    
        </div>
      );
}
 
export default AllBooks;