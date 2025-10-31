import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    getData();

    async function getData() {
      try {
        // api
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json(); // users : []
        setUsers(data);
        setLoding(false);
      } catch (error) {
        console.log("Something went wrong");
      }
    }
  }, []);

  return (
    <>
      <h1>Hii there</h1>
      <div className="container">
        {loading ? (
          <h2>Loading....</h2>
        ) : (
          users.map((user) => {
            return <UserCard user={user} />;
          })
        )}
      </div>
    </>
  );
}

function UserCard({ user }) {
  console.log(user);
  return (
    <div>
      <p>User name : {user.username}</p>
      <p>User Phone : {user.phone}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default App;
