import InputBox from "./InputBox";

function ListBox() {
  return (
    <div className="rounded-md border-l-4 px-4 py-4 border-l-indigo-500 bg-indigo-50">
      <ul role="list" className="divide-y divide-gray-100 bg-white">
        <li key={employees.length + 1} className="px-4 py-5">
          <InputBox />
        </li>
      </ul>
    </div>
  );
}

export default ListBox;
