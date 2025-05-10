import { format, addHours, parseISO, isDate } from "date-fns";

/**
 * FormatDatetime
 * @description Format date time to string (UTC+7 for Asia/Ho_Chi_Minh)
 * @param {*} value - input datetime value
 * @param {boolean} timeValue - display time value or not
 * @returns {string} formatted date string
 */
const FormatDatetime = (value, timeValue = true) => {
  if (!value) return "";

  let date;
  if (isDate(value)) {
    date = value;
  } else {
    date = parseISO(value);
  }
  const dateInVietnam = addHours(date, 7);

  const dateFormat = timeValue ? "dd/MM/yyyy HH:mm:ss" : "dd/MM/yyyy";
  return format(dateInVietnam, dateFormat);
};

export default FormatDatetime;
