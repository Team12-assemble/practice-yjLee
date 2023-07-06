import { collection, getDocs } from "firebase/firestore";
import db from "./fbConfig";

const querySnapshot = await getDocs(collection(db, "cafe-list"));
const wholeData = [];
querySnapshot.forEach((doc) => {
  wholeData.push(doc.data());
});
console.log(wholeData);

// const array = querySnapshot.docs.map((el) => el.data());
// console.log("array", array);

function App() {
  return <div className="App"></div>;
}

export default App;
