import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (data) => {
    const newBookmark = [...bookmarks, data];
    setBookmarks(newBookmark);
  };

  const handleMarkAsRead = (time) => {
    const addTime = readingTime + time;
    setReadingTime(addTime);
  };
  console.log(readingTime);
  return (
    <>
      <Header />
      <div className="md:flex container mx-auto gap-4">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
      <Footer />
    </>
  );
}

export default App;
