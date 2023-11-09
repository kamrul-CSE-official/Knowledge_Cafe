import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
      <Footer />
    </>
  );
}

export default App;
