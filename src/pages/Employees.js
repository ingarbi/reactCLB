import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from '../components/Header'

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 3,
      name: "Nick",
      role: "Intern",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 4,
      name: "Michael",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8",
    },
    {
      id: 5,
      name: "Jake",
      role: "Engineer",
      img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    },
    {
      id: 6,
      name: "Corey",
      role: "Junior",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      
      {showEmployees ? (
        <>
          
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  // key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You can not see employees</p>
      )}
    </div>
  );
}

export default Employees;
