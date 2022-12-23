import modalStyles from "../scss/Modal.module.scss";
import { Button } from "./Button";

export const Modal = () => {
  return (
    <section className={modalStyles["modal-container"]}>
      <article className={modalStyles["modal-container__item"]}>
        <h1 className={modalStyles["modal-container__title"]}>Para mi mamá</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam
          excepturi ratione consequatur ipsum veritatis cum rerum, possimus a,
          facere beatae! Aperiam a illum animi, reprehenderit exercitationem
          voluptatem deleniti aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam
          excepturi ratione consequatur ipsum veritatis cum rerum, possimus a,
          facere beatae! Aperiam a illum animi, reprehenderit exercitationem
          voluptatem deleniti aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam
          excepturi ratione consequatur ipsum veritatis cum rerum, possimus a,
          facere beatae! Aperiam a illum animi, reprehenderit exercitationem
          voluptatem deleniti aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam
          excepturi ratione consequatur ipsum veritatis cum rerum, possimus a,
          facere beatae! Aperiam a illum animi, reprehenderit exercitationem
          voluptatem deleniti aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam
          excepturi ratione consequatur ipsum veritatis cum rerum, possimus a,
          facere beatae! Aperiam a illum animi, reprehenderit exercitationem
          voluptatem deleniti aut.
        </p>
        <Button message="Te Amo" />
      </article>
    </section>
  );
};
