const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",

    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Name",

    role: "Co-Founder / CTO",

    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

function ListForm() {
  return (
    <form>
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <input
                  placeholder="Name"
                  className="text-sm font-semibold leading-6 text-gray-900"
                />
              </div>
            </div>
            <div>
              <input type="time" />
            </div>
            <div>
              <input type="time" />
            </div>
            <div>
              <p>$</p>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default ListForm;
