import React, { FC } from "react";
import { Alert } from "reactstrap";
import { resetAlert } from "../../redux/features/alertSlice";
import { useAppSelector, useAppDispatch } from "../../types/hooks";

interface IProps {}
interface IState {}

const GlobalAlert: FC = (props) => {
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(resetAlert());
  }, 3000);

  const { text, color } = useAppSelector((state) => state.alert);

  if (text === "") {
    return <></>;
  }

  return <Alert color={color}>{text}</Alert>;
};

export default GlobalAlert;
