import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import Input, { InputProps } from "@/shared/components/common/Input";
import moment from "moment";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import "./calendar.css";
import { DATE_VALIDATION_PATTERN } from "@/shared/constants/validation";

type Props = InputProps & {
  onChangeDate: (value: string) => void;
  initialValue: string;
};

// eslint-disable-next-line react/display-name
const DatePicker: React.FC<Props> = ({
  onChangeDate,
  initialValue,
  ...inputProps
}) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const calendarRef = useRef<any>(null);

  useOutsideClick(calendarRef, () => {
    setVisibleCalendar(false);
  });

  useEffect(() => {
    if ( DATE_VALIDATION_PATTERN.value.test(initialValue)) {
      let [day, month, year] = initialValue.split("/");
      const date = new Date(Number(year), Number(month) - 1, Number(day));
      setDateValue(date);
      setInputValue(moment(date).format("DD/MM/YYYY"));
    }
  }, [initialValue]);

  const onChangeDatePicker = (value: any) => {
    setDateValue(value);
    setInputValue(moment(value).format("DD/MM/YYYY"));
    onChangeDate(moment(value).format("DD/MM/YYYY"));
  };

  const onChangeDateManually = (event: any) => {
    setInputValue(event.target.value);
    onChangeDate(event.target.value);
  };

  return (
    <div className="relative" ref={calendarRef}>
      <Input
        onClick={() => setVisibleCalendar(true)}
        {...inputProps}
        value={inputValue}
        onChange={onChangeDateManually}
      />
      {visibleCalendar && (
        <Calendar
          className="absolute bottom-full z-10"
          onChange={onChangeDatePicker}
          value={dateValue}
        />
      )}
    </div>
  );
};

export default DatePicker;
