import "./index.css";
import ListBox from "./components/ListBox";
import { useSelector } from "react-redux";
import TotalPaymentBox from "./components/TotalPaymentBox";

function App() {
  const st = useSelector((state) => state.employees);
  console.log(st);
  return (
    <div className="container mx-auto px-4 py-4">
      <ListBox />
      <TotalPaymentBox/>
    </div>
  );
}
export default App;
