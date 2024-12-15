const UsersPage = ({ searchParams: { topUsers } }) => {
  // Dummy data
  const allUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123456789", location: "Dhaka" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987654321", location: "Chittagong" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "564738291", location: "Khulna" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "102938475", location: "Sylhet" },
  ];

  const topUsersList = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123456789", location: "Dhaka" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987654321", location: "Chittagong" },
  ];

  // Determine users list
  const users = topUsers ? topUsersList : allUsers;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        {topUsers ? "Top Users List" : "All Users List"}
      </h1>

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase tracking-widest">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 transition">
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.phone}</td>
                  <td className="py-2 px-4 border-b">{user.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default UsersPage;
