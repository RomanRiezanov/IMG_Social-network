import React from "react";
import Profile from "./pages/Profile/Profile";
import classes from "./Main.module.css";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import NavContainer from "./Nav/NavContainer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";

const Main = () => {
  return (
    <div className={classes.main}>
      <NavContainer />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<DialogsContainer />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Main;
