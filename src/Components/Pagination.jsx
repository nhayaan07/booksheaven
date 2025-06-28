const Pagination = ({allBooks ,postPerPage , setCurrentPage}) => {
    
const pages = [];
for(let i=1;i <= Math.ceil(allBooks/postPerPage);i++)
{
pages.push(i);
}
//console.log(pages);

    return ( 
<>
<div className="flex  flex-row justify-center gap-5">
    {
        pages.map((page ,idx)=>
        
            <button key={idx} onClick={()=> setCurrentPage(page) } className="bg-green-300 hover:bg-red-500 p-2 text-xs focus:bg-red-500">{page}</button>
        )
    }
    
    



</div>
</>

     );
}
 
export default Pagination;