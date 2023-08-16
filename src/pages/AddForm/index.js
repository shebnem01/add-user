import React, { useCallback, useContext, useState } from "react";
import { globalContext } from "../../shared/provider/GlobalProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddForm = () => {
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imgURL: null,
    bio: "",
    id: null,
  });
  const { users, setUsers } = useContext(globalContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, id: Math.random() });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, bio, imgURL } = user;
    if (
      (firstName === "" || lastName === "" || email === "" || bio === "",
      imgURL === null)
    ) {
      toast.error("fill in the inputs");
      return;
    }

    setUsers([...users, user]);
    toast.success("user added successfully");
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="w-75 mx-auto bg-info p-4 my-4">
        <div className="mb-3">
          <label className="form-label">First name</label>
          <input
            name="firstName"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last name</label>
          <input
            name="lastName"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Biography</label>
          <input
            name="bio"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile image url</label>
          <input
            name="imgURL"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        {/* <div className="mb-3 form-check">
    <input type="file" id='exampleCheck1' />
    <label className="form-check-label " for="exampleCheck1"> upload img</label>
  </div> */}
        <button className="btn btn-danger d-block w-100">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
