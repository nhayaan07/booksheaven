import { useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

const CategoryPage = () => {
  const { books: categories, isLoading } = useBooks(); 
  const { slug } = useParams(); 
  const defaultThumb = "/thumbnail/default.jpg";

  if (isLoading) return <p>Loading...</p>;
  if (!categories) return <p>No books found</p>;

  // Step 1: Find the category object
  const categoryObj = categories.find(cat => cat.category.toLowerCase() === slug.toLowerCase());

  if (!categoryObj) return <p>No books found for this category.</p>;

  return (
    <div className="w-full overflow-hidden">


<div className="min-h-[400px] p-5 sm:px-10 lg:px-50">
    
      <h1 className="text-xl font-bold">Category: {categoryObj.category}</h1>

      <div className="bookCard grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-center  mt-5">

        {categoryObj.books.map((book, idx) => (
          <div key={idx} className="bg-gray-50  p-3 ">
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
};

export default CategoryPage;
