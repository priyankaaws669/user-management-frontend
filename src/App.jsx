import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const BASE_URL = "http://13.218.149.47:3000"

  //GET user
  const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users/get`);
    const data = await response.json();
    setUsers(data);
  };
  //Run when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  //POST user
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // UPDATE
      await fetch(`${BASE_URL}/users/patch/${editId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      setEditId(null);
    } else {
      // CREATE
      await fetch(`${BASE_URL}/users/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });
    }

    fetchUsers();

    setName("");
    setAge("");
    setEmail("");
  };

  //DELETE user
  const deleteUser = async (id) => {
    await fetch(`${BASE_URL}/users/delete/${id}`, {
      method: "DELETE",
    });

    fetchUsers(); //refresh list
  };

  //EDIT Button
  const handleEdit = async (user) => {
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setEditId(user.id);
  };
  

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="container">
        <h1>User Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">{editId ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      <div className="table-container">
        <input
          className="searchBar"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <div className="action-button">
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;
