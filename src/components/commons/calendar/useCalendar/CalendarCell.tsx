import { useCalendarCell } from '@react-aria/calendar';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';
import { useRef } from 'react';
import styles from './styles.module.css';

export function CalendarCell(props: any) {
  let ref: any = useRef();
  let { cellProps, buttonProps, formattedDate, isSelected, isDisabled, isOutsideVisibleRange } = useCalendarCell(
    props,
    props.state,
    ref
  );

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <td {...cellProps}>
      <div
        ref={ref}
        hidden={isOutsideVisibleRange}
        {...mergeProps(buttonProps, focusProps)}
        className={clsx(styles.cell, {
          [styles.selected]: isSelected,
          [styles.focusRing]: isFocusVisible,
          [styles.disabled]: isDisabled,
        })}
      >
        {formattedDate}
      </div>
    </td>
  );
}
