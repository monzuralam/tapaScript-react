import PremiumCar from "./PremiumCar";
import Search from "./Search";

const SearchPremium = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center">
      <Search />
      <PremiumCar />
    </div>
  );
};

export default SearchPremium;
