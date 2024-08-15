import PropTypes from "prop-types";

const Bookmark = (props) => {
  const { id, status, onToggleBookMark } = props;
  return (
    <i
      className={status ? "bi bi-bookmark-heart" : "bi bi-bookmark"}
      style={{ fontSize: "25px", cursor: "pointer" }}
      onClick={() => onToggleBookMark(id)}
    ></i>
  );
};

Bookmark.propTypes = {
  id: PropTypes.string,
  status: PropTypes.bool,
  onToggleBookMark: PropTypes.func.isRequired,
};

export default Bookmark;
