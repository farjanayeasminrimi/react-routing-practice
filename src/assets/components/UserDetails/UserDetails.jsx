import React from "react";
import { useLoaderData } from "react-router";
import "../user/user.css";
import { useNavigate } from "react-router";

const UserDetails = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  const { id, username } = user;
  console.log(user);
  return (
    <div>
      <h2>{id}</h2>
      <p>{username}</p>
      <button onClick={() => navigate(-1)} className="btn">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
