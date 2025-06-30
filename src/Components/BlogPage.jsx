import { useParams } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";


const BlogPage = () => {
  const { slug } = useParams();
  const {blogs} = useBlogs();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="p-4 text-red-500">ব্লগ পাওয়া যায়নি।</div>;
  }

  return (
   <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
  <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
  <p className="text-sm text-gray-500 mb-4">
    Author: {blog.author} | Date: {blog.date}
  </p>
  <img className="h-[200px]" src={blog.thumb} alt="" /> <br />
  <div className="text-lg leading-relaxed">
    {blog.content.map((para, i) => (
      <p className="mb-3 text-base" key={i}>{para}</p>
    ))}
  </div>

  
</div>

  );
};

export default BlogPage;
