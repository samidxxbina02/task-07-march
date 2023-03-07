import React, { useState } from "react";

const employees = [
  { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
  { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
  { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
  { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
  { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
  { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
  { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
  { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
  { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
  { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
];

const EmployeeTable = () => {
  const [state, setState] = useState(employees);

  const handleChange = (e, i, key) => {
    const { value } = e.target;
    setState((prevState) =>
      prevState.map((employee, index) =>
        index === i ? { ...employee, [key]: parseInt(value) } : employee
      )
    );
  };

  const getTotalSalary = () => {
    return state.reduce(
      (totalSalary, employee) =>
        totalSalary + employee.days * employee.salaryPerDay,
      0
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Days Worked</th>
            <th>Salary per Day</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          {state.map((employee, i) => (
            <tr key={i}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>
                <input
                  type="number"
                  value={employee.days}
                  onChange={(e) => handleChange(e, i, "days")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.salaryPerDay}
                  onChange={(e) => handleChange(e, i, "salaryPerDay")}
                />
              </td>
              <td>{employee.days * employee.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total Salary: {getTotalSalary()}</div>
    </div>
  );
};

export default EmployeeTable;
