const api =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo";

fetch(api)
  .then((response) => response.json())
  .then((data) => makePage(data));

function makePage(data) {
  setData("day0", dateFormat(data.daily.time[0]));
  setData("day1", dateFormat(data.daily.time[0]));

  setData("weathercode0", data.daily.weathercode[0]);
  setData("weathercode1", data.daily.weathercode[1]);

  setData("temperature_2m_max0", data.daily.temperature_2m_max[0] + "℃");
  setData("temperature_2m_max1", data.daily.temperature_2m_max[1] + "℃");

  setData("temperature_2m_min0", data.daily.temperature_2m_min[0] + "℃");
  setData("temperature_2m_min1", data.daily.temperature_2m_min[1] + "℃");

  setData("precipitation_sum0", data.daily.precipitation_sum[0] + "mm");
  setData("precipitation_sum1", data.daily.precipitation_sum[1] + "mm");
}

function setData(id, data) {
  document.getElementById(id).innerHTML = data;
}

function dateFormat(date) {
  let dateObject = new Date(date);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return month + "月" + day + "日";
}
