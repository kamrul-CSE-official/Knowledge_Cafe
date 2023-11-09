import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3 bg-slate-300 rounded-md">
      <h2 className="flex items-center justify-center p-3 text-2xl font-medium text-white bg-blue-500">
        Spent time on read : {readingTime} min
      </h2>
      <h2 className="text-3xl font-semibold m-3">
        Bookmark Blocks: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark, i) => (
          <Bookmark key={i} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
