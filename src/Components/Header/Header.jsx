import Blogs from "../Blogs/Blogs";
import profile from "../../assets/react.svg";
import Bookmark from "../Bookmarks/Bookmark";
import { useState } from "react";
const Header = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [markedRead, setMarkedRead] = useState(0);

  const handleAddBookmark = (blog) => {
    setBookmarks(
      bookmarks.indexOf(blog) === -1 ? [...bookmarks, blog] : [...bookmarks]
    );
  };
  const handleMarkRead = (blog) => {
    setMarkedRead(markedRead + blog.reading_time);
    if (bookmarks.indexOf(blog) !== -1) {
      const filteredBookmark = bookmarks.filter(
        (bookmarkedBlog) => bookmarkedBlog !== blog
      );
      setBookmarks([...filteredBookmark]);
    }
  };
  return (
    <div>
      <div className="navbar mb-4 bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl">Knowledge Cafe</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost h-full">
            <img className="h-fit" src={profile} alt="profile" />
          </button>
        </div>
      </div>
      <hr className="" />{" "}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkRead={handleMarkRead}
        />

        <div className="text-left">
          <div className="border-blue-200 border-2 bg-pink-100 rounded-xl p-2 mb-3">
            <p className="text-xl font-bold text-center">Spent Time On Read : {markedRead}</p>
          </div>
          <div className="border-blue-200 border-2 bg-base-300 rounded-xl p-3">
            <h1 className="text-xl font-bold ">Bookmarked Blogs: {bookmarks.length}</h1>
            {bookmarks.map((bookmark) => (
              <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
