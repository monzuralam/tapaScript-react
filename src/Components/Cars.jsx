import CarList from "./CarList";
import Heading from "./Heading";
import SearchPremium from "./SearchPremium";

const Cars = () => {
  return (
    <div className="px-10 py-8">
      <Heading />
      <SearchPremium />
      <CarList />
    </div>
  );
};

export default Cars;
