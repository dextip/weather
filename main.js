const api =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo";

fetch(api)
  .then((response) => response.json())
  .then((data) => makePage(data));

for (let i = 0; i < 3; i++) {
  setData("day" + i, dateFormat(data.daily.time[i]));
  setData("weathercode" + i, getWMO(data.daily.weathercode[i]));
  setData("temperature_2m_max" + i, data.daily.temperature_2m_max[i] + "℃");
  setData("temperature_2m_min" + i, data.daily.temperature_2m_min[i] + "℃");
  setData("precipitation_sum" + i, data.daily.precipitation_sum[i] + "mm");
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
