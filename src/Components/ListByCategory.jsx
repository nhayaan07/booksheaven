import useBooks from "../hooks/useBooks";

const ListByCategory = ({category}) => {
    const{books} = useBooks();
    const booksOfThisCategory = books.filter(
  item => item.category.toLowerCase() === category.toLowerCase()
  ).flatMap(b => b.books || []);;
  //console.log(booksOfThisCategory);
  const defaultThumb = "/thumbnail/default.jpg";


    return (  
<div>
   <div className="min-h-[400px] p-5 sm:px-10 lg:px-50">
      <h1 className="text-2xl font-bold">{category}</h1>

      <div className="bookCard grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center  mt-5">

        {booksOfThisCategory.slice(0,6).map((book, idx) => (
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


  </div>

</div>

    );
}
 
export default ListByCategory;