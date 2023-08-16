import React, { useContext } from "react";
import Card from "../../feature/Cards";
import { Link } from "react-router-dom";
import { globalContext } from "../../shared/provider/GlobalProvider";

const Home = () => {
  const { users } = useContext(globalContext);
  return (
    <div className="container">
      <div className="bg-success text-light p-3 my-4 mx-auto w-25 text-center rounded-2">
        {" "}
        <Link className="bg-success text-light" to="/addform">
          Add user
        </Link>
      </div>
      <div className="row">
      {users.length===0&&(
        <div className="alert text-center alert-danger w-50 mx-auto py-5">User not found</div>
      )}
        {users?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
