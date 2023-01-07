import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Nick",
      role: "Intern",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Michael",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8",
    },
    {
      name: "Jake",
      role: "Engineer",
      img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    },
    {
      name: "Corey",
      role: "Junior",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  // key={employee.id}
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can not see employees</p>
      )}
    </div>
  );
}

export default App;
