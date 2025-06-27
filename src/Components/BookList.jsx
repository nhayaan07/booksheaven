import useBooks from "../hooks/useBooks";

const BookList = () => {
  const { books, isLoading } = useBooks();
  const defaultThumb = "/thumbnail/default.jpg";

  if (isLoading) return <p className="text-center py-10">Loading…</p>;

  const humayunAhmed = books.find(book => book.category === "HumayunAhmed");

  return (
    <div className="bg-gray-300 min-h-[400px] p-5 sm:px-10 lg:px-40">
      <h1 className="text-2xl font-bold">Booklist</h1>

      <div className="bookCard grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center w-full mt-5">
        {humayunAhmed?.books?.map((book, idx) => (
          <div key={idx} className="bg-fuchsia-50 p-3">
            <img
              className="h-[150px] w-[120px] object-cover mx-auto"
              src={book.thumb ? book.thumb : defaultThumb}
              alt={book.title}
            />
            <h1 className="sm:text-xl md:text-lg font-semibold text-center mt-3">
              {book.title}
            </h1>
            <p className="text-center">Humayun Ahmed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
