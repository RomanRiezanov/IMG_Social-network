import React from "react";
import Nav from "./Nav/Nav";
import Profile from "./pages/Profile/Profile";
import classes from "./Main.module.css";
import Dialogs from "./pages/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";

const Main = ({ ...props }) => {
  return (
    <div className={classes.main}>
      <Nav friends={props.sideBar.friends} />
      <Routes>
        <Route
          path="/profile"
          element={<Profile postsData={props.profilePage.postsData} />}
        />
        <Route
          path="/dialogs"
          element={
            <Dialogs
              dialogs={props.dialogsPage.dialogs}
              messagesData={props.dialogsPage.messagesData}
            />
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Main;
