import React, { FC } from "react";
import loadingSpinner from "../../assets/images/loader.gif";
interface IProps {}
interface IState {}

const Loader: FC<IProps> = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loadingSpinner} alt="loading" />
    </div>
  );
};

export default Loader;
