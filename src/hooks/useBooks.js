import { useState, useEffect } from "react";

// 🔹 This hook only does one thing: fetch the JSON and give it back.
export default function useBooks() {
  const [books, setBooks] = useState([]);   // the whole JSON file
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/Books/books.json")              // path inside /public
      .then(response => response.json())
      .then(data => {
        setBooks(data);                     // save JSON array
        setIsLoading(false);                // done!
      })
      .catch(console.error);
  }, []);                                   // run **once** on mount

  return { books, isLoading };
}
