import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (data) => {
    const newBookmark = [...bookmarks, data];
    setBookmarks(newBookmark);
  };
  return (
    <>
      <Header />
      <div className="md:flex container mx-auto gap-4">
        <Blogs handleBookmark={handleBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
      <Footer />
    </>
  );
}

export default App;
