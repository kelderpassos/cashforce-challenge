export const convertDate = (date: string): String => {
  const d = new Date(date);

  let month = "" + (d.getMonth() + 1);
  console.log("Month", month);

  let day = "" + d.getDate();
  console.log("day", day);

  const year = d.getFullYear();
  console.log("year", year);

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};
