import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store";

function InputBox() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const nameInputRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: nameInputRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
    };
    dispatch(addEmployee(data));
    formRef.current.reset();
  };
  return (
    <form className="flex justify-between" onSubmit={onSubmit} ref={formRef}>
      <input
        required
        type="text"
        placeholder="Name"
        className="text-sm font-semibold leading-6 text-gray-900"
        ref={nameInputRef}
      />

      <div className="flex gap-x-4">
        <input required type="time" ref={startTimeRef} />
        <input required type="time" ref={endTimeRef} />

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
