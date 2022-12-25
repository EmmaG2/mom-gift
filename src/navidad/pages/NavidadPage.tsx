import { useEffect, useState } from "react";
import { Button, HomeWrapper, Modal } from "../components";
import styles from "../scss/Navidad.module.scss";

import confetti from "canvas-confetti";
import { useSelector } from "react-redux/es/exports";
import { selectNavidadState } from "../../redux/navidad";

export const NavidadPage = () => {
  const { showModal } = useSelector(selectNavidadState);

  const onDispatchConfetti = () => {
    return {};
  };

  useEffect(() => {
    const duration = 100 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 5;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      let timeLeft = animationEnd - Date.now();
      let ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ["#ff2a2a"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <section className={styles["navidad-page"]}>
      {showModal ? <Modal /> : null}
      <HomeWrapper />

      <div
        style={{
          zIndex: 3,
          marginTop: "3em",
        }}
      >
        <Button onConfetti={onDispatchConfetti} />
      </div>
    </section>
  );
};
