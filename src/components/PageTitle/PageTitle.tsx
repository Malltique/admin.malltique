import React, { FC } from "react";

import styles from "./PageTitle.module.scss";
import { IPageTitleProps } from "./PageTitle.props";
import { Button, Input } from "../_ui";

export const PageTitle: FC<IPageTitleProps> = ({ title, withFilters=false, withSearch=false }) => (
  <div className={styles.page_header}>
    <div className={styles.page_name}>
      <div className={styles.title}>{title}</div>
    </div>
    <div className={styles.filter_wrapper}>
      {withSearch && (
        <div className={styles.input_wrapper}>
          <div className={styles.search_icon_wrapper}>
            <i className="icon-magnifier" />
          </div>
          <Input type="text" placeholder="Search" />
        </div>
      )}
      {withFilters && (
        <Button>
          <i className="icon-equalizer" />
        </Button>
      )}
    </div>
  </div>
);
