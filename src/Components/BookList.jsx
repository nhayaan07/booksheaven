import { useEffect, useState } from "react";

const BookList = () => {
const [data , setData] = useState([]);

// book fetching here
useEffect(() => {
  fetch("/Books/books.json")
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    })
    .then(data => {
      console.log("Fetched data:", data); // 👈 This will log the data
      setData(data);
    })
    .catch(err => console.error("Error:", err));
}, []);
//
const humayunAhmed = data.find(book => book.category === "HumayunAhmed");
    return (  
<div className=" bg-gray-300 min-h-[400px] p-5 sm:px-10 lg:px-50 ">
<h1 className="text-2xl">Booklist</h1>

<div className="bookCard grid grid-cols-2 md:grid-cols-3  gap-5 justify-center w-full mt-5">
 
{humayunAhmed?.books?.map( (cat,idx) => (
    <div key={idx} className="bg-white p-3">
    <h1 className="sm:text-xl md:text-2xl">{cat.title}</h1>
    <p className="">Writer: Humayun Ahmed</p>
</div>
)


)}


</div> {/*grid*/}
</div>


    );
}
 
export default BookList;