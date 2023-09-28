import { useSelector } from "react-redux";
import InputBox from "./InputBox";

function ListBox() {
  const employees = useSelector(({ employees }) => employees.data);
  return (
    <div className="rounded-md border-l-4 px-4 py-4 border-l-indigo-500 bg-indigo-50 text-sm font-semibold leading-6 text-gray-900">
      <ul role="list" className="divide-y divide-gray-100 ">
        <li key={employees.length + 2} className="px-4 py-1 bg-indigo-50">
          <div className="grid grid-cols-5 gap-4">
            <p>Name</p>
            <p>Start</p>
            <p>End</p>
            <p>Total Hours</p>
            <p>Payment</p>
          </div>
        </li>
        {employees.map((employee, i) => {
          return (
            <li key={i} className="px-4 py-5 bg-white">
              <div className="grid grid-cols-5 gap-4">
                <p>
                  {i + 1}. {employee.name}
                </p>
                <p>{employee.startTime}</p>
                <p>{employee.endTime}</p>
                <p>{employee.totalHours}</p>
                <p>{}$</p>
              </div>
            </li>
          );
        })}
        <li key={employees.length + 1} className="">
          <InputBox />
        </li>
      </ul>
    </div>
  );
}

export default ListBox;
