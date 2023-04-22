import React, { useEffect, useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("items"));
    if (value) {
      setId(value.id);
      console.log("Item is set succesfully");
    }
    console.log("In profile page id  is ", id);
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }
  }, [id]);
  return (
    <div>
      <h2 className="title">Profile</h2>

      {users && (
        <div className="outerContainer">
          <div className="img-box">
            <img src={users.image} alt="" />
          </div>
          <div className="text-box-main">
            <div className="text-content">
              <span className="textbox-title">Id : </span>
              <span className="textbox-content">{users.id}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Fisrt Name : </span>
              <span className="textbox-content">{users.firstName}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Last Name : </span>
              <span className="textbox-content">{users.firstName}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Maiden Name : </span>
              <span className="textbox-content">{users.maidenName}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Age : </span>
              <span className="textbox-content">{users.age}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Gender : </span>
              <span className="textbox-content">{users.gender}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Email : </span>
              <span className="textbox-content">{users.email}</span>
            </div>
            <div className="text-content">
              <span className="textbox-title">Phone : </span>
              <span className="textbox-content">{users.phone}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">username : </span>
              <span className="textbox-content">{users.usename}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Password: </span>
              <span className="textbox-content">{users.password}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">DOB : </span>
              <span className="textbox-content">{users.birthDate}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Blood Group : </span>
              <span className="textbox-content">{users.bloodGroup}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Height : </span>
              <span className="textbox-content">{users.height}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Weight : </span>
              <span className="textbox-content">{users.weight}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Eye color : </span>
              <span className="textbox-content">{users.eyeColor}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Hair : </span>
              <span className="textbox-content">
                {users.hair &&
                  `${users["hair"].color} , ${users["hair"].type} `}
              </span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Domain : </span>
              <span className="textbox-content">{users.domain}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">IP : </span>
              <span className="textbox-content">{users.ip}</span>
            </div>

            <div className="text-content">
              <span className="textbox-title">Address : </span>
              <span className="textbox-content">
                {users.address && `${users["address"].address} `}
              </span>
            </div>

            <div className="text-content">
              <span className="textbox-title">MacAddress : </span>
              <span className="textbox-content">{users.macAddress}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
