import { Link } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";

const BlogList = () => {
    const{blogs} = useBlogs();
 // console.log(blogs)     ;

    return (  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 sm:px-10 lg:px-50">
            {
                blogs.map((blog,idx)=> 
                <div className="flex gap-3 border-1 border-[#cacaca] p-2 rounded-[5px]" key={idx}>  
                    <img className="h-[70px] w-[70px]" src={blog.thumb} alt={blog.title} />
                    <div>
                        <h3>{blog.title}</h3>
                        <p className="text-xs">{blog.summary}...</p>
                        

                        <Link
            to={`/blog/${blog.slug}`}
          >
            <button className="bg-[#4d277b] text-xs p-1 mt-1 text-white hover:bg-[#37D138] hover:text-black cursor-pointer">Read </button>
          </Link>
                    </div>
                </div>
                )
            }
        </div>
    );
}
 
export default BlogList;
<div>

</div>