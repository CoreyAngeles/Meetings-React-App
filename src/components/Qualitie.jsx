import PropTypes from "prop-types";

const Qualitie = (props) => {
  const { color, name } = props;
  return <>{<span className={`badge text-bg-${color} m-1`}>{name}</span>}</>;
};

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Qualitie;
