import React, { useCallback, useMemo, useState } from "react";
import { InfoRow, InfoRowProps } from "./InfoRow";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface VerticalSelectableRows {
  rows: InfoRowProps[];
  className?: string;
  index?: number;
  onIndexChange?: (n: number) => void;
}

export function VerticalSelectableRow({
  rows,
  className,
  index,
  onIndexChange,
}: VerticalSelectableRows) {
  const [_index, setIndex] = useState<number>(index ?? 0);

  const selectedIndex = useMemo(() => index ?? _index, [index, _index]);

  const onChange = useCallback(
    (n: number) => {
      if (onIndexChange) onIndexChange(n);
      setIndex(n);
    },
    [setIndex, onIndexChange]
  );
  return (
    <div className={clsx(styles.row, className)}>
      <div className={clsx(styles.progress_bar_container)}>
        <div
          style={{
            height: `${(1 / rows.length) * 100}%`,
            top: `${(selectedIndex / rows.length) * 100}%`,
          }}
        />
      </div>
      <div className={clsx(styles.col_between)}>
        {rows.map((info, i) => (
          <div
            onClick={() => onChange(i)}
            className={clsx(styles.transition_opacity)}
            style={{ opacity: i === selectedIndex ? 1 : 0.6 }}
          >
            <InfoRow {...info} />
          </div>
        ))}
      </div>
    </div>
  );
}
