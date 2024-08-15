import PropTypes from "prop-types";
import Qualitie from "./Qualitie";

const QualitiesList = (props) => {
  const { qualities } = props;
  return (
    <>
      {qualities.map((quality) => (
        <Qualitie key={quality._id} color={quality.color} name={quality.name} />
      ))}
    </>
  );
};
QualitiesList.propTypes = {
  qualities: PropTypes.array,
};

export default QualitiesList;
