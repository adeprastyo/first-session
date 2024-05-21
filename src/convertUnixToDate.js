/*
Gunakan npm dayjs (https://www.npmjs.com/package/dayjs) untuk menyelesaikan tugas ini.
Convert Unix timestamp menjadi tanggal dengan format DD/MM/YYYY
*/
import dayjs from "dayjs";

function convertUnixToDate(unixTimestamp) {
  // Code here
  console.log(dayjs(unixTimestamp).format("DD/MM/YYYY"));
}

convertUnixToDate(1710867600); // Output: 20/03/2024
convertUnixToDate(1714150800); // Output: 27/04/2024
