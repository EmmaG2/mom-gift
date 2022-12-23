import { HomeCircle } from "./HomeCircle";

import wrapperStyles from "../scss/HomeWrapper.module.scss";

export const HomeWrapper = () => {
  return (
    <div className={wrapperStyles.box}>
      <HomeCircle />
    </div>
  );
};
