import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({ handleBookmark }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="md:w-2/3">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} />
        ))}
      </div>
    </div>
  );
}
Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
};
