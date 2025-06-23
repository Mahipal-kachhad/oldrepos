import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
     axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log(res.data);
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  return (
    <div>
      <table className="w-75 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>phys</th>
            <th>chem</th>
            <th>math</th>
            <th>comp</th>
            <th>engl</th>
            <th>total</th>
            <th>min</th>
            <th>max</th>
            <th>pr</th>
            <th>grade</th>
            <th>status</th>
          </tr>

          {data?.map((val, idx) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.phys}</td>
                <td>{val.chem}</td>
                <td>{val.math}</td>
                <td>{val.comp}</td>
                <td>{val.engl}</td>
                <td>{val.total}</td>
                <td>{val.min}</td>
                <td>{val.max}</td>
                <td>{val.pr}</td>
                <td>{val.grade}</td>
                <td>{val.status}</td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div>
        <button>fetch data</button>
      </div>
    </div>
  );
};

export default Data;
