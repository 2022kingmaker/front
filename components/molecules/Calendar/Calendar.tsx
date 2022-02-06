import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import React, { useState } from 'react';
import { DayModifiers, RangeModifier } from 'react-day-picker/types/Modifiers';
import { getThisWeekRange } from '@lib/date';
import { MONTHS, WEEKDAYS_SHORT } from '@lib/constant';

const CalendarBlock = styled.div`
  .DayPicker-Week {
    > .DayPicker-Day--selected {
      border-radius: 0;
      background-color: #4a90e2;
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

interface CalendarProps {
  disabledDays: {
    startDate: Date;
    endDate: Date;
  }[];
  selectedDays: RangeModifier;
  setSelectedDays: React.Dispatch<React.SetStateAction<RangeModifier>>;
}
const Calendar = ({ disabledDays, selectedDays, setSelectedDays }: CalendarProps) => {
  const { from, to } = selectedDays;

  const handleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const { startDate: from, endDate: to } = getThisWeekRange(day);
    setSelectedDays({ from, to });
  };

  return (
    <CalendarBlock>
      <DayPicker
        numberOfMonths={1}
        onDayClick={handleDayClick}
        showOutsideDays
        locale="ko"
        months={MONTHS}
        weekdaysShort={WEEKDAYS_SHORT}
        selectedDays={{ from, to }}
        disabledDays={date => {
          return (
            disabledDays &&
            disabledDays.every(({ startDate, endDate }) => {
              return !(date >= startDate && date <= endDate);
            })
          );
        }}
      />
    </CalendarBlock>
  );
};

export default Calendar;
