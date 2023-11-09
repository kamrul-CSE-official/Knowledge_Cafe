import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks }) {
  return (
    <div className="md:w-1/3 bg-slate-300 rounded-md">
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
};
