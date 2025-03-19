import { ActionIcon, Image } from "@mantine/core";
import cn from "classnames";
import React, { FC, ReactNode, useState } from "react";

import styles from "./languages.module.scss";
import { ILanguagesProps } from "./languages.props";
import Eng from "../../assets/flugs/usa.png";
import Spain from "../../assets/flugs/spain.png";
import Rus from "../../assets/flugs/rus.png";

export const Languages: FC<ILanguagesProps> = ({ ...props }) => {
  const [openSelectLg, setOpenSelectLg] = useState(false);
  const [currLg, setCurrLg] = useState<"ru" | "sp" | "en">("en");

  const lgs: { [key: string]: ReactNode } = {
    sp: <Image src={Spain} />,
    ru: <Image src={Rus} />,
    en: <Image src={Eng} />,
  };

  const handleSelectedLg = (lg: "ru" | "sp" | "en") => {
    setCurrLg(lg);
    setOpenSelectLg((prev) => !prev);
  };
  return (
    <div
      className={cn(styles.languages, {
        [styles.languages_open]: openSelectLg,
      })}
      {...props}>
      {openSelectLg && (
        <ActionIcon onClick={() => setOpenSelectLg((prev) => !prev)}>
          <i className="icon-close" />
        </ActionIcon>
      )}
      <ActionIcon onClick={() => setOpenSelectLg((prev) => !prev)}>{lgs[currLg]}</ActionIcon>
      {currLg !== "sp" && (
        <ActionIcon onClick={() => handleSelectedLg("sp")}>
          <Image className={styles.lg} src={Spain} />
        </ActionIcon>
      )}
      {currLg !== "ru" && (
        <ActionIcon onClick={() => handleSelectedLg("ru")}>
          <Image className={styles.lg} src={Rus} />
        </ActionIcon>
      )}
      {currLg !== "en" && (
        <ActionIcon onClick={() => handleSelectedLg("en")}>
          <Image className={styles.lg} src={Eng} />
        </ActionIcon>
      )}
    </div>
  );
};
