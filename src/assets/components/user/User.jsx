import React from "react";
import "./user.css";
import { Link, useNavigate } from "react-router";
const User = ({ user }) => {
  let navigate = useNavigate();

  const { id, name, email, phone } = user;
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`user/${id}`}>
        <button className="btn">Details</button>
      </Link>

      <button className="btn" onClick={() => navigate(`user/${id}`)}>
        See More...
      </button>
    </div>
  );
};

export default User;
