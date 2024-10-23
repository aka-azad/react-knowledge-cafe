import PropTypes from "prop-types";
import bookmark from "../../assets/bookmark.svg";
import { useState } from "react";
const Blog = ({ blog, handleAddBookmark, handleMarkRead }) => {
  const [isDisabled, setDisable] = useState(false);
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const handleAsMarkRead = () => {
    if (!isDisabled) {
      handleMarkRead(blog);
      setDisable(true);
    } else console.warn("Button disabled");
  };
  return (
    <div className="card card-compact pb-5 mb-4 bg-base-100  text-left">
      <figure>
        <img className="w-full" src={cover} alt={title} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center ">
          <div className="flex text-left items-center gap-6">
            <img className="h-16" src={author_img} alt={author} />
            <div>
              <p className="font-bold text-2xl">{author}</p>
              <p className="font-semibold opacity-60">{posted_date}</p>
            </div>
          </div>

          <div className="font-medium opacity-60 flex items-center gap-1">
            <p className=" ">{reading_time} Minutes to Read</p>
            <button onClick={() => handleAddBookmark(blog)}>
              <img src={bookmark} alt="bookmark" />
            </button>
          </div>
        </div>
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="text-left opacity-70">
          {hashtags.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </p>
        <div className="card-actions ">
          <button onClick={handleAsMarkRead}>
            <a className="link link-primary">Mark as Read</a>
          </button>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkRead: PropTypes.func.isRequired,
};

export default Blog;
