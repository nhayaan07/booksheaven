import { Link } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import { FaBook } from "react-icons/fa";


const AllCategories = () => {
    const{books} = useBooks();
    //console.log(books.map((book)=> book.category));
    return ( 

        <div className="p-2 container mx-auto">
<h1 className="text-xl font-bold underline">Categories</h1>
<br />
<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
{
    books.map((book,idx)=>
   <Link to={`/category/${book.category}`} key={idx}> <div  className="flex gap-2 items-center bg-[#26EB17] hover:bg-gray-300 p-2"><FaBook className="text-xl" />{book.category}</div></Link>


    )
}
</div>
            

        </div>
     );
}
 
export default AllCategories;