import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import { DayModifiers, RangeModifier } from 'react-day-picker/types/Modifiers';
import { getPlusDate, getThisWeekRange } from '@lib/date';
import React from 'react';
import { MONTHS, WEEKDAYS_SHORT } from '@lib/constant';

const MultiCalendarBlock = styled.div<Pick<MultiCalendarProps, 'isCalendarOpen'>>`
  z-index: 100;
  display: ${({ isCalendarOpen }) => (isCalendarOpen ? 'block' : 'none')};
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 262px);

  box-shadow: 0 4px 10px rgb(51 51 51), 0 0 4px rgb(51 51 51 / 50%);
  background: rgba(255, 255, 255, 0.87);
  border-radius: 8px;
  outline: none;
  @media ${({ theme }) => theme.mobile} {
    left: 0;
    top: 110px;
  }
  .DayPicker-Week {
    & .DayPicker-Day--outside {
      background-color: rgba(255, 255, 255, 0) !important;
    }

    & .DayPicker-Day--disabled:not(.DayPicker-Day--outside) {
      background-color: rgba(255, 255, 255, 0);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0) !important;
    }

    > .DayPicker-Day--selectStartWeek {
      border-radius: 0;
      background-color: #4a90e2;
      color: white !important;

      :first-child:not(.DayPicker-Day--outside) {
        border-radius: 16px 0 0 16px;
      }
    }

    > .DayPicker-Day--selectEndWeek {
      border-radius: 0;
      background-color: #4a90e2;
      color: white !important;

      :last-child:not(.DayPicker-Day--outside) {
        border-radius: 0 16px 16px 0;
      }
    }

    > .DayPicker-Day--betweenDates:not(.DayPicker-Day--selectEndWeek):not(.DayPicker-Day--selectStartWeek) {
      background-color: #6fa9ef;
      color: white;
      border-radius: 0;
    }

    &:hover {
      background-color: #d0cfcf;

      > .DayPicker-Day:not(.DayPicker-Day--disabled) {
        border-radius: 0;
        background-color: #d0cfcf;
      }
    }

    .DayPicker-Day--disabled:hover {
      background-color: rgba(255, 255, 255, 0);
    }
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
  isCalendarOpen: boolean;
}
const MultiCalendar = ({ isCalendarOpen, disabledDays, selectedWeek, setSelectedWeek }: MultiCalendarProps) => {
  const { from, to } = selectedWeek;

  const handleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const { startDate } = getThisWeekRange(day);

    if (from && to) {
      setSelectedWeek({ from: startDate, to: null });
      return;
    }

    if (!from || from > startDate!) {
      setSelectedWeek({ ...selectedWeek, from: startDate });
      return;
    }
    if (!to) {
      setSelectedWeek({ ...selectedWeek, to: startDate });
      return;
    }
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
    <MultiCalendarBlock isCalendarOpen={isCalendarOpen}>
      <DayPicker
        className="Selectable"
        numberOfMonths={2}
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
