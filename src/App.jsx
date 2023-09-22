import { Route, Routes } from "react-router-dom";
import "./App.css";
import FetchData from "./components/FetchData";
import Details from "./components/Details";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FetchData />} />
      <Route
        exact
        path="/details"
        element={
          <Details
            imageUrl="https://via.placeholder.com/600/92c952"
            userId="24566"
            userName="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cum veniam recusandae. Veniam necessitatibus rerum fugit sint cupiditate dolor aperiam!"
          />
        }
      />
    </Routes>
  );
}

export default App;
