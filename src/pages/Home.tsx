import React, { FC, useState, useEffect } from "react";
import Search from "../components/Search";
import MoviesList from "../components/MoviesList";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../redux/features/userSlice";
const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any): void => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div>
      <Search />
      <br></br>
      <br></br>
      <MoviesList />
    </div>
  );
};

export default Home;
