import "./index.css";
import ListBox from "./components/ListBox";
import { useSelector } from "react-redux";
function App() {
  const st = useSelector((state) => state.employees);
  console.log(st);
  return (
    <div className="container mx-auto px-5 py-4">
      <ListBox />
    </div>
  );
}
export default App;
