import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="form-group row ">
      <h3>Create New Record</h3>
      <div className="">
      <img src="https://image.shutterstock.com/image-illustration/colombia-colombian-vs-mexico-mexican-600w-1958547085.jpg" class="position-absolute top-50 end-0"  alt="..."/>
      </div>
      <form>
        <div className="form-row">
          <div class="form-group col-md-6">
          <label for="inputEmail4">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          
          <label for="inputEmail4">Apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
            </div>
          </div>
      
      </form>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>

        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label for="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}
