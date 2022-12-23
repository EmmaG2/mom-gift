import circleStyles from "../scss/HomeCircle.module.scss";

export const HomeCircle = () => {
  return (
    <div className={circleStyles.circle}>
      <h2 className={circleStyles["title-text"]}>
        Feliz Navidad <br />
        <span className={circleStyles["mom-text"]}>Te amo Mamá</span>
      </h2>
    </div>
  );
};
