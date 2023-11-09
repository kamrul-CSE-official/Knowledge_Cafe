import PropTypes from "prop-types";

function Bookmark({ bookmark }) {
  return (
    <div>
      <div className="bg-slate-100 my-4 p-5 rounded-lg mx-3">
        <h2 className="text-xl font-semibold">{bookmark.title}</h2>
      </div>
    </div>
  );
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
