import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./fbConfig";

function App() {
  const [dataList, setDataList] = useState([]);
  const cafelistCollectionRef = collection(db, "cafe-list");

  useEffect(() => {
    const getCafes = async () => {
      const data = await getDocs(cafelistCollectionRef);
      // console.log(data);
      setDataList(data.docs.map((doc) => doc.data()));
    };

    getCafes();
  }, []);
  return (
    <div className="App">
      <ul>
        {dataList.map((value) => (
          <li key={value.id}>
            <p>{value.name}</p>
            <p>{value.location}</p>
            <p>{value.tags.join(", ")}</p>
            <p>{value.phone_number}</p>
            <p>
              {value.menu &&
                value.menu.map((v) => (
                  <p>
                    {v.product} : {v.price}원
                  </p>
                ))}
            </p>
            <p>
              {value.leftSeat} / {value.totalSeat}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
