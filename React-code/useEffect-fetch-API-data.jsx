import React, { useEffect, useState } from "react";

export default function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://reqres.in/api/users?page=2");
        const response = await data.json();
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log("userList", userList);
  return (
    <div>
      <h1>Fetch Data from any API</h1>
      <table>
        {userList.map((object, index) => {
          const {id, email, first_name, last_name } = object;
          return (
            <tr key={index}>
              <td>{id}</td>
              <td>{email}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
