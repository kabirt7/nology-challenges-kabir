import cities from "../../../../data/data.json";
import CityCard from "../CityCard";

const CityList = () => {
  console.log(cities, "students");
  return (
    <div>
      {cities &&
        cities.map((city) => {
          return <CityCard key={city.id} title={city.title} />;
        })}
    </div>
  );
};

export default CityList;
