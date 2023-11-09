import PropTypes from "prop-types";

export default function Blog({ blog }) {
  return <div>Blog</div>;
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
