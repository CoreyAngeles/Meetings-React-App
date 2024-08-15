import PropTypes from "prop-types";

const SearchStatus = (props) => {
  const { length } = props;
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    return "человек тусанёт";
  };
  return (
    <h2>
      <span className={`badge text-bg-${length > 0 ? "primary" : "danger"}`}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
