import PropTypes from "prop-types";

const PremiumCar = ({ onPremiumCar }) => {
  return (
    <div className="w-1/3">
      <input
        type="checkbox"
        onChange={(event) => {
          onPremiumCar(event.target.checked);
        }}
        className="default:ring-2  checked:bg-blue-500"
      />
      Show Premium Only
    </div>
  );
};

PremiumCar.propTypes = {
  onPremiumCar: PropTypes.func.isRequired,
};

export default PremiumCar;
