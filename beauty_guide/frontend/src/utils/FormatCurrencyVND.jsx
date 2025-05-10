const FormatCurrencyVND = (value) => {
  if (value === null || value === undefined || isNaN(Number(value))) {
    return 0;
  }
  return Number(value).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export default FormatCurrencyVND;
