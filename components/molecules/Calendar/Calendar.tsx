import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import React from 'react';
import { DayModifiers, RangeModifier } from 'react-day-picker/types/Modifiers';
import { getThisWeekRange } from '@lib/date';
import { MONTHS, WEEKDAYS_SHORT } from '@lib/constant';

const CalendarBlock = styled.div<Pick<CalendarProps, 'isCalendarOpen'>>`
  display: ${({ isCalendarOpen }) => (isCalendarOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 160px);
  width: 320px;

  box-shadow: 0 4px 10px rgb(51 51 51), 0 0 4px rgb(51 51 51 / 50%);
  background: rgba(255, 255, 255, 0.87);
  border-radius: 8px;
  outline: none;
  .DayPicker-Week {
    &:hover {
      background-color: rgba(255, 255, 255, 0) !important;
    }

    & .DayPicker-Day--outside {
      background-color: rgba(255, 255, 255, 0) !important;
    }

    & .DayPicker-Day--disabled {
      background-color: rgba(255, 255, 255, 0) !important;
    }
    > .DayPicker-Day--selected {
      border-radius: 0;
      background-color: #4a90e2;
      :first-child {
        border-radius: 16px 0 0 16px;
      }
      :last-child {
        border-radius: 0 16px 16px 0;
      }
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
  isCalendarOpen: boolean;
}
const Calendar = ({ isCalendarOpen, disabledDays, selectedDays, setSelectedDays }: CalendarProps) => {
  const { from, to } = selectedDays;

  const handleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const { startDate: from, endDate: to } = getThisWeekRange(day);
    setSelectedDays({ from, to });
  };

  return (
    <CalendarBlock isCalendarOpen={isCalendarOpen}>
      <DayPicker
        numberOfMonths={1}
        onDayClick={handleDayClick}
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
