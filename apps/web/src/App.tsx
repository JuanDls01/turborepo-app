import { useCallback, useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  surname: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const handleClick = useCallback(() => setCount((count) => count + 1), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        console.log(response);
        const data: { users: User[] } = await response.json();
        setUsers(data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
      {users && (
        <div>
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                className={user.id !== users.length ? "cardWithBorder" : "card"}
              >
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.surname}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
