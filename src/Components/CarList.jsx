import Proptypes from "prop-types";

import CarItem from "./CarItem";

const CarList = ({ cars, search, premiumCar }) => {
  const rows = [];

  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return;
    }

    if (!premiumCar || car.isPremium) {
      rows.push(<CarItem car={car} key={car.id} />);
    }
  });

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {rows}
    </div>
  );
};

CarList.propTypes = {
  cars: Proptypes.object.isRequired,
  search: Proptypes.string.isRequired,
  premiumCar: Proptypes.bool.isRequired,
};

export default CarList;
