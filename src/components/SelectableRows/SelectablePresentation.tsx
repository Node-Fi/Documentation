import React, { useState } from "react";
import { InfoRowProps } from "./InfoRow";
import clsx from "clsx";
import { VerticalSelectableRow } from "./VerticalSelectableRows";
import styles from "./styles.module.css";

export interface SeleactablePresentationProps {
  presentationItems: {
    mainImage: React.ReactElement;
    row: InfoRowProps;
  }[];
  className?: string;
}

export function SelectablePresentation({
  presentationItems,
  className,
}: SeleactablePresentationProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={clsx(styles.row_between, className)}>
      <div className={clsx(styles.presentation_content)}>
        {presentationItems[selectedIndex].mainImage}
      </div>
      <VerticalSelectableRow
        rows={presentationItems.map(({ row }) => row)}
        index={selectedIndex}
        onIndexChange={setSelectedIndex}
        className={styles.selection_outer}
      />
    </div>
  );
}
