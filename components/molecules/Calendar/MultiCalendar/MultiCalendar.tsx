import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import { DayModifiers, RangeModifier } from 'react-day-picker/types/Modifiers';
import { getPlusDate, getThisWeekRange } from '@lib/date';
import React, { useState } from 'react';
import { MONTHS, WEEKDAYS_SHORT } from '@lib/constant';

const MultiCalendarBlock = styled.div`
  .DayPicker-Week {
    > .DayPicker-Day--selectStartWeek {
      border-radius: 0;
      background-color: #4a90e2;
      color: white;
    }

    > .DayPicker-Day--selectEndWeek {
      border-radius: 0;
      background-color: #4a90e2;
      color: white;
    }

    > .DayPicker-Day--betweenDates {
      background-color: #d1e8f8 !important;
      color: #4a90e2;
      border-radius: 0;
    }

    &:hover {
      background-color: #d0cfcf;

      > .DayPicker-Day:not(.DayPicker-Day--disabled) {
        border-radius: 0;
        background-color: #d0cfcf;
      }
    }
  }

  .DayPicker-Day:not(.DayPicker-Day--disabled) {
    cursor: pointer;
  }
`;
export interface disabledDays {
  startDate: Date;
  endDate: Date;
}
interface MultiCalendarProps {
  disabledDays: disabledDays[];
  selectedWeek: RangeModifier;
  setSelectedWeek: React.Dispatch<React.SetStateAction<RangeModifier>>;
}
const MultiCalendar = ({ disabledDays, selectedWeek, setSelectedWeek }: MultiCalendarProps) => {
  const { from, to } = selectedWeek;

  const handleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const { startDate } = getThisWeekRange(day);
    if (!from) {
      setSelectedWeek({ ...selectedWeek, from: startDate });
      return;
    }
    if (!to) {
      setSelectedWeek({ ...selectedWeek, to: startDate });
      return;
    }
    setSelectedWeek({ from: startDate, to: null });
  };

  const { startDate: startDayInStartWeek, endDate: startEndInStartWeek } = getThisWeekRange(from);
  const { startDate: startDayInEndWeek, endDate: startEndInEndWeek } = getThisWeekRange(to);
  const modifiers = {
    selectStartWeek: {
      from: startDayInStartWeek,
      to: startEndInStartWeek,
    },
    betweenDates: {
      from: getPlusDate(startEndInStartWeek, +1),
      to: getPlusDate(startDayInEndWeek, -1),
    },
    selectEndWeek: {
      from: startDayInEndWeek,
      to: startEndInEndWeek,
    },
  };
  return (
    <MultiCalendarBlock>
      <DayPicker
        className="Selectable"
        numberOfMonths={2}
        showOutsideDays
        locale="ko"
        onDayClick={handleDayClick}
        initialMonth={new Date(2022, 0)}
        // @ts-ignore
        selectedDays={[from, { from, to }]}
        months={MONTHS}
        modifiers={modifiers}
        weekdaysShort={WEEKDAYS_SHORT}
        disabledDays={date => {
          return (
            disabledDays &&
            disabledDays.every(({ startDate, endDate }) => {
              return !(date >= startDate && date <= endDate);
            })
          );
        }}
      />
    </MultiCalendarBlock>
  );
};

export default MultiCalendar;
