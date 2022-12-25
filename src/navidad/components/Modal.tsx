import modalStyles from "../scss/Modal.module.scss";
import { Button } from "./Button";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tittle } from "./Tittle";
import confetti from "canvas-confetti";

export const Modal = () => {
  const onDispatchConfetti = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: any) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    return {};
  };

  return (
    <section className={modalStyles["modal-container"]}>
      <article className={modalStyles["modal-container__item"]}>
        <h1 className={modalStyles["modal-container__title"]}>Para mi mamá</h1>
        <p>
          Por este medio, te quiero decir todo lo que siento y no soy capaz de
          decirte en persona con mis palabras:
        </p>
        <p>
          Te quiero dar las gracias por todo el esfuerzo que haces por sacarme a
          mi y a mi hermano adelante, para mi es muy fácil darte las gracias, y
          sé que para ti no es nada fácil tener que realizar tus labores en la
          casa como madre, y también tener que trabajar.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <LazyLoadImage
            style={{
              borderRadius: "50%",
              margin: "1em",
            }}
            width={"250px"}
            height="250px"
            src="/mom.jpg"
          />
        </div>
        <p>
          La imagen que tengo de ti, es la de una mujer guerrera, que lucha por
          darle a sus hijos lo que ella no tuvo de niña.
        </p>
        <p>
          Y programo esta pequeña página web para expresarte todo mi amor y mi
          agradecimiento, sabes que la programación es una de las cosas que más
          me gustan, y te hago este pequeño detalle usando la programación,
          porque gracias a ti he podido aprender lo que se, sin tu apoyo, jamás
          hubiera conseguido aprender lo poco que se.
        </p>
        <p>Realmente te doy las gracias por todo tu apoyo.</p>
        <Tittle title="Te amo mamá" />
        <Button onConfetti={onDispatchConfetti} message=":)" />
      </article>
    </section>
  );
};
