import React from "react";
import classes from "./User.module.css";
import user from "../../../../../resources/media/IrinaPchelnikova.jpg";

const User = ({
  name,
  country,
  city,
  status,
  alt,
  userId,
  followed,
  follow,
  unfollow,
}) => {
  return (
    <div className={classes.user}>
      <div className={classes.info}>
        <div className={classes.userImg}>
          <img src={user} alt={alt} className={classes.img} />
        </div>
        <div className={classes.name}>
          <p className={classes.nomination}>name</p>
          <p>{name}</p>
        </div>
        <div className={classes.location}>
          <p className={classes.nomination}>location</p>
          <p>{country}</p>
          <p>{city}</p>
        </div>
        <div className={classes.buttonBlock}>
          {followed ? (
            <button
              onClick={() => unfollow(userId)}
              className={`${classes.button} ${classes.unfollow}`}
            >
              Unfollow
            </button>
          ) : (
            <button onClick={() => follow(userId)} className={classes.button}>
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.status}>
        <i className="fa fa-circle online"></i> {status}
      </div>
    </div>
  );
};

export default User;
