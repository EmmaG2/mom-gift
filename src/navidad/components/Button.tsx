import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/navidad";
import buttonStyle from "../scss/Button.module.scss";
import confetti from "canvas-confetti";

interface Props {
  message?: string;
  onConfetti: () => {};
}

export const Button: FC<Props> = ({
  message = "Haz click mami",
  onConfetti,
}) => {
  const dispatch = useDispatch();

  const onDispatchConfetti = () => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  return (
    <button
      onClick={() => {
        dispatch(toggleModal());
        onConfetti();
      }}
      className={buttonStyle.btn}
    >
      {message}
      <LazyLoadImage width={"20px"} height="20px" src="/heart-outline.svg" />
    </button>
  );
};
