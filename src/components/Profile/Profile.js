import React, { useState } from "react";

function Profile() {
  const [avatarID, setAvatarID] = useState(0);
  const imgURL = `https://api.adorable.io/avatars/${avatarID}`;

  const toggleAvatar = () => {
    setAvatarID(Math.floor(Math.random() * 500) + 1);
  };

  return (
    <>
      <div className="col-md-12 col-sm-12">
        <div className="card mx-5 my-5" style={{ width: "18rem" }}>
          <img className="card-img-top" src={imgURL} alt="Card preview" />
          <div className="card-body">
            <h5 className="card-title">Goran Urukalo</h5>
            <p className="card-text">
              goran.urukalo@teletrader.com
              <br />
              http://goran.urukalo@github.io
            </p>
            <button className="btn btn-primary" onMouseDown={toggleAvatar}>
              Toggle avatar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
