import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddBookmark, handleMarkRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className=" col-span-3">
      {blogs.map((blog) => (
        <Blog
          handleAddBookmark={handleAddBookmark}
          handleMarkRead={handleMarkRead}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkRead: PropTypes.func.isRequired,
};
export default Blogs;
