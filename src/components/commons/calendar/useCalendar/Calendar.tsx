import { createCalendar } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import { CalendarState, CalendarStateOptions, useCalendarState } from '@react-stately/calendar';
import { useRef } from 'react';
import { DateValue, I18nProvider, useButton, useCalendar, useLocale } from 'react-aria';
import CalendarGrid from './CalendarGrid';
import styles from './styles.module.css';

function Calendar(props: any) {
  let { locale } = props;
  let ref: any = useRef();

  let state: CalendarState = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state);

  return (
    <I18nProvider locale={locale === 'th' ? 'th-TH' : 'en-US'}>
      <div {...calendarProps} ref={ref} className={[styles.app, styles.calendar].join(' ')}>
        <div className={styles.header}>
          <ButtonNextPrev {...prevButtonProps}>&lsaquo;</ButtonNextPrev>
          <div className={styles.dropdowns}>
            <MonthDropdown state={state} />
            <YearDropdown state={state} />
          </div>
          <ButtonNextPrev {...nextButtonProps}>&rsaquo;</ButtonNextPrev>
        </div>
        <CalendarGrid state={state} />
      </div>
    </I18nProvider>
  );
}

function MonthDropdown({ state }: { state: CalendarState }) {
  let months = [];
  let formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  let numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    let date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  let onChange = (e: any) => {
    let value = Number(e.target.value);
    let date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };

  return (
    <select aria-label="Month" onChange={onChange} value={state.focusedDate.month} className={styles.select}>
      {months.map((month, i) => (
        <option key={i} value={i + 1}>
          {month}
        </option>
      ))}
    </select>
  );
}

function YearDropdown({ state }: { state: CalendarState }) {
  let years = [];
  let formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  });

  // Format 60 years on each side of the current year according
  // to the current locale and calendar system.
  for (let i = -60; i <= 60; i++) {
    let date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  let onChange = (e: any) => {
    let index = Number(e.target.value);
    let date = years[index].value;
    state.setFocusedDate(date);
  };

  return (
    <select aria-label="Year" onChange={onChange} value={60} className={styles.select}>
      {years.map((year, i) => (
        // use the index as the value so we can retrieve the full
        // date object from the list in onChange. We cannot only
        // store the year number, because in some calendars, such
        // as the Japanese, the era may also change.
        <option key={i} value={i}>
          {year.formatted}
        </option>
      ))}
    </select>
  );
}

function ButtonNextPrev(props: any) {
  let ref: any = useRef();
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} className={styles.button}>
      {props.children}
    </button>
  );
}

export default Calendar;
