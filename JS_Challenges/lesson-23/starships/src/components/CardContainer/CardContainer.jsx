import { useState, useEffect } from "react";
import { getUserData, getUserDataByName } from "../../data/getStarShipLogic";
import Card from "../Card/Card";

const CardContainer = ({ starshipName }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(starshipName);
    setLoading(true);
    if (starshipName === "") {
      getUserData().then((result) => {
        setUserData(result);
        console.log(result);
        setLoading(false);
      });
    } else if (starshipName !== "") {
      getUserDataByName(starshipName).then((result) => {
        console.log(result);
        setUserData(result);

        setLoading(false);
      });
    }
  }, [starshipName]);

  return (
    <main>
      {loading && <p>Loading...</p>}
      {!loading &&
        userData.length > 0 &&
        userData.map((user, index) => (
          <Card
            index={index}
            key={user.name + index}
            name={user.name}
            manufacturer={user.manufacturer}
            length={user.length}
          />
        ))}
    </main>
  );
};

export default CardContainer;
