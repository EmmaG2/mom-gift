import { FC } from "react";
import titleStyles from "../scss/Title.module.scss";

interface Props {
  title: string;
}

export const Tittle: FC<Props> = ({ title }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <h4 className={titleStyles.title}>{title}</h4>
    </div>
  );
};
