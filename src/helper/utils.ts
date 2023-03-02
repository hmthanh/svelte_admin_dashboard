import type { Series } from "../lib/TrafficPanel/IDataType";

// export const convertTimestamp = (series) => {
//   // console.log("series", series);

//   const chartDatas = [];
//   for (const i in series) {
//     if (series[i] === null) {
//       continue;
//     }
//     const id = series[i].id;
//     const label = series[i].label;
//     const chartData = [];
//     const total = series[i].total;
//     if (series[i].data !== null && series[i].data.length > 0) {
//       for (const j in series[i].data) {
//         const timestamp = series[i].data[j].timestamp;
//         if (timestamp > new Date().getTime()) {
//           continue;
//         }
//         // chartData.push([timestamp + 7 * 3600000, series[i].data[j].value]);
//         chartData.push([timestamp, series[i].data[j].value]);
//       }

//       chartDatas.push({ id: id, label: label, data: chartData, total: total });
//     }
//   }

//   return chartDatas;
// };

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === undefined) {
    return "";
  }
  if (bytes === 0) return "0";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte", "Petabyte", "Exabyte", "Zettabyte", "Yottabyte"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  if (i >= 0) {
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  } else {
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " "; // + sizes[i];
  }
};

export const formatBytesPerSeconds = (bytes: number, decimals = 2) => {
  if (bytes === undefined) {
    return "";
  }
  if (bytes === 0) return "0";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bps", "KBps", "MBps", "GBps", "TBps", "Pbps", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  if (i >= 0) {
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  } else {
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " "; // + sizes[i];
  }
};

export const convertChartDataType = (series: Series[]) => {
  const labels: number[] = [];
  const values: number[] = [];
  series.forEach((item: Series) => {
    labels.push(item.date);
    values.push(item.value);
  });
  return [labels, values];
};

/**
 * Find the closest smaller number in an array
 * @param time Ascendingly sorted array
 */
export const waitFor = (time: number) =>
  new Promise((res) => setTimeout(res, time));

/**
 * Find the closest smaller number in an array
 * @param arr Ascendingly sorted array
 * @param value Value to check against
 */
export function smallerClosestValue(arr: number[], value: number) {
  let prevVal = arr[0];

  for (const val of arr) {
    if (val > value) return prevVal;
    if (val == value) return val;
    prevVal = val;
  }

  return arr[arr.length - 1];
}

export function randint(lower: number, upper: number) {
  if (lower > upper) [lower, upper] = [upper, lower];

  return lower + Math.floor((upper - lower) * Math.random());
}

export function getCurrentTime() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
}
