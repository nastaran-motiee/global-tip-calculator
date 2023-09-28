function TotalPaymentBox() {
  return (
    <form className="rounded-md border-l-4 px-4 py-4 border-l-indigo-500 bg-indigo-50 text-sm font-semibold leading-6 text-gray-900 mt-8">
      <div className="flex justify-between px-4 py-2 bg-white border border-indigo-500">
        <input required type="number" placeholder="   Total Payment" />
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
export default TotalPaymentBox;
