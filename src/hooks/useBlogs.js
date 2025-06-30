import { useState, useEffect } from "react";
// 🔹 This hook only does one thing: fetch the JSON and give it back.
export default function useBooks() {
  const [blogs, setBlogs] = useState([]);   // the whole JSON file
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/Books/blogs.json")              // path inside /public
      .then(response => response.json())
      .then(data => {
        setBlogs(data);                     // save JSON array
        setIsLoading(false);                // done!
      })
      .catch(console.error);
  }, []);  

  return { blogs, isLoading };
}
