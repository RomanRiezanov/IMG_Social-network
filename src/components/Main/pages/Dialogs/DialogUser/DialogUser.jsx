import React from 'react';
import classes from './DialogUser.module.css';
import user from '../../../../../resources/media/IrinaPchelnikova.jpg';
import { NavLink } from 'react-router-dom';

const DialogUser = ({ ...props }) => {
  return (
    <NavLink to={`/dialogs/${props.id}`}>
      <div className={classes.dialogItem}>
        <img src={user} alt="avatar Irina Pchelnikova" />
        <div className={classes.about}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.status}>
            <i className="fa fa-circle online"></i> {props.status}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default DialogUser;
