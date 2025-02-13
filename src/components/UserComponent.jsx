import { useState } from "react";
import "../styles/userComponent.css"

const UserComponent = () => {
  const [array, setArray] = useState([
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ]);

  function handleField() {
    const nameField = document.querySelector("#name-field").value;
    const emailField = document.querySelector("#email-field").value;

    document.querySelector("#name-field").value = "";
    document.querySelector("#email-field").value = "";
    setArray([...array, { username: nameField, email: emailField }]);
  }

  return (
    <div id="user-card">
      <input id="name-field" type="text" placeholder="Your Name" />
      <input id="email-field" type="text" placeholder="Email Address" />
      <button onClick={handleField}>Add User</button>
      {array.map((obj, index) => (
        <div>
          <p key={index}>
            Name: {obj.username} Email: {obj.email}
          </p>
        </div>
      ))}
    </div>
  );
};
export default UserComponent;
