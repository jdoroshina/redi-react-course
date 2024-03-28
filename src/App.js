import React from "react";
import "./styles.css";
import logo from "./logo.svg";
import team from "./team";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReDI React Spring 2024</h1>
      </header>
      <main>
        <table className="members-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
                <tr className="member-row" key={member.name}>
                  <td className="avatar-cell">
                    <img src={member.image} alt={member.name} />
                  </td>
                  <td className="name-cell">{member.name}</td>
                  <td className="role-cell">{member.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
