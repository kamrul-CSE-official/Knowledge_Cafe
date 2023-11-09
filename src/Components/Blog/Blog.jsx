import PropTypes from "prop-types";
import { BsBookmarkDash } from "react-icons/bs";

export default function Blog({ blog, handleBookmark }) {
  const { title, cover, reading_time, author, published_date, hashtags } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover photo of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12">
              <img
                className="w-14 rounded-full"
                src={author.img}
                alt={author.name}
              />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">{author.name}</h4>
            <span>{published_date}</span>
          </div>
        </div>
        <div>
          <span className="flex items-center gap-2">
            {reading_time} min read{" "}
            <button
              onClick={() =>
                handleBookmark({ reading_time: reading_time, title: title })
              }
              className="btn"
            >
              <BsBookmarkDash size={18} />
            </button>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-4xl">{title}</h2>
        <p className="text-blue-500 my-4">
          {hashtags.map((hashtag, i) => (
            <span key={i}>
              {" "}
              <a href="#">#{hashtag}</a>{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
};
