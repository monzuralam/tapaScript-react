import PropTypes from "prop-types";

const CarItem = ({ car }) => {
  const { title, brand, year, price, isPremium } = car;

  return (
    <div className="border rounded-md p-4 transition-all shadow hover:shadow-md">
      <h3 className="text-xl">{title} </h3>
      <p>
        <strong>Brand:</strong> {brand}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Premium:</strong> {isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItem;
