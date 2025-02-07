import { useEffect, useState } from "react";
import CarList from "./CarList";
import Heading from "./Heading";
import SearchPremium from "./SearchPremium";

const Cars = () => {
  const carData = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  const [cars, setCars] = useState(carData);
  const [search, setSearch] = useState("");
  const [premiumCar, setPremiumCar] = useState(false);

  return (
    <div className="px-10 py-8">
      <Heading />
      <SearchPremium
        search={search}
        onSetSearch={setSearch}
        onPremiumCar={setPremiumCar}
      />
      <CarList cars={cars} search={search} premiumCar={premiumCar} />
    </div>
  );
};

export default Cars;
