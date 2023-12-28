import React from "react";
import { Route,Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import DetailsPage from "../pages/details/DetailsPage";
import AboutPage from "../pages/about/AboutPage";
import AnimePage from "../pages/anime/AnimePage";
import MoviePage from "../pages/movie/MoviePage";
import GamePage from "../pages/game/GamePage";
import LoginPage from "../users/pages/LoginPage";
import EditUserPage from "../users/pages/EditUserPage";
import ProfileUserPage from "../users/pages/ProfilePage";
import SignupPage from "../users/pages/SignupPage";
import DigimonData from "../pages/details/dataPages/DigimonData";
import DigiviceData from "../pages/details/dataPages/DigiviceData";
import DigiDestinedData from "../pages/details/dataPages/DigiDestinedData";



const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"detailsPage"} element={<DetailsPage />} />
      <Route path={"aboutPage"} element={<AboutPage />} />
      <Route path={"animePage"} element={<AnimePage />} />
      <Route path={"moviePage"} element={<MoviePage />} />
      <Route path={"gamePage"} element={<GamePage />} />
      <Route path={"loginPage"} element={<LoginPage />} />
      <Route path={"editUserPage"} element={<EditUserPage />} />
       <Route path={"profileUserPage"} element={<ProfileUserPage />} />
      <Route path={"signupPage"} element={<SignupPage />} />
      <Route path={"digimonPage"} element={<DigimonData />} />
      <Route path={"digivicePage"} element={<DigiviceData />} />
      <Route path={"digidestinedPage"} element={<DigiDestinedData />} />

      




    </Routes>
  );
};

export default Router;
