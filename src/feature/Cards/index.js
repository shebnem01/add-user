import React, { memo,  useContext } from "react";
import { globalContext } from "../../shared/provider/GlobalProvider";

const Card = ({ item }) => {
  const {deleteUser}=useContext(globalContext);

  return (
    <div className="col-3 mb-5">
      <div className="card">
        <div className="card-header">
          <div className="bg-primary text-light text-center p-3">
            Profile information
          </div>
        </div>
        <img
          className="card-img-top img-fluid"
          src={item.imgURL}
          alt="Card image cap"
        />
         <div className="card-body">
          <h5 className="card-title">{item.firstName}</h5>
          <h5 className="card-title email">{item.email}</h5>
          <p className="card-text bio">{item.bio}</p>
           <button onClick={()=>deleteUser(item.id)} className="btn btn-xl btn-danger">Delete user</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
