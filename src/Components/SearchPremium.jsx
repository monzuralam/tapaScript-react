import PremiumCar from "./PremiumCar";
import Search from "./Search";
import PropTypes from "prop-types";

const SearchPremium = ({ search, onSetSearch, onPremiumCar }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center">
      <Search search={search} onSetSearch={onSetSearch} />
      <PremiumCar onPremiumCar={onPremiumCar} />
    </div>
  );
};

SearchPremium.propTypes = {
  search: PropTypes.string.isRequired,
  onSetSearch: PropTypes.func.isRequired,
  onPremiumCar: PropTypes.func.isRequired,
};

export default SearchPremium;
