import { FC } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/navidad";
import buttonStyle from "../scss/Button.module.scss";

interface Props {
  message?: string;
}

export const Button: FC<Props> = ({ message = "Para mi mamá" }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleModal())} className={buttonStyle.btn}>
      {message}
    </button>
  );
};
