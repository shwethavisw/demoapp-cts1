import "./style.css";
import React, { useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };

  return (
    <div className="App">
      <h1> Populating JSON Data in Tables</h1>

      <tbody className="table">
        <tr>
          <th>Action</th>
          <th>Name</th>
          <th>Email</th>
          <th>Zipcode</th>
          <th>Phone</th>
          <th>CatchPhrase</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>-</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.phone}</td>
            <td style={{ textOverflow: "ellipsis" }}>
              {item.company.catchPhrase}
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
