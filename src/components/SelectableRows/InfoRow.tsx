import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export interface InfoRowProps {
  title: string | React.ReactElement;
  leftContent?: React.ReactElement;
  rightContent?: React.ReactElement;
  description: string | React.ReactElement;
  className?: string;
}

export function InfoRow({
  title,
  leftContent,
  rightContent,
  description,
  className,
}: InfoRowProps) {
  return (
    <div className={clsx(styles.info_row, className)}>
      {leftContent}
      <div className={clsx(styles.content)}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {rightContent}
    </div>
  );
}
