import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store";

function InputBox() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("18:00");
  const [endTime, setEndTime] = useState("01:00");

  const onSubmit = (event) => {
    event.preventDefault();

    let totalHours =
      Number(endTime.slice(0, 2)) -
      Number(startTime.slice(0, 2)) +
      (Number(endTime.slice(3)) / 60 - Number(startTime.slice(3)) / 60);

    while (totalHours < 0) {
      totalHours += 24;
    }

    const data = {
      name,
      startTime,
      endTime,
      totalHours: totalHours.toFixed(2),
    };

    dispatch(addEmployee(data));
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const onEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };
  return (
    <form
      className="flex justify-between border border-violet-500 px-4 py-4 text-sm font-semibold leading-6 text-gray-600  bg-white"
      onSubmit={onSubmit}
    >
      <input
        required
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={onNameChange}
      />

      <div className="flex gap-x-4">
        <input
          required
          type="time"
          value={startTime}
          onChange={onStartTimeChange}
        />
        <input
          required
          type="time"
          value={endTime}
          onChange={onEndTimeChange}
        />

        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default InputBox;
