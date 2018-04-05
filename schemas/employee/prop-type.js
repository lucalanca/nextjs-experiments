import PropTypes from "prop-types";
import CockpitTimestampPropType from "../cockpit-timestamp/prop-type";
import CockpitImagePropType from "../cockpit-image/prop-type";

export default PropTypes.shape({
  slug: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  picture: CockpitImagePropType.isRequired,
  _id: PropTypes.string.isRequired,
  _modified: CockpitTimestampPropType.isRequired,
  _created: CockpitTimestampPropType.isRequired
});
