export default function Time() {
  var getData = new Date();
  var day = `${getData.getDate()}/${
    getData.getMonth() + 1
  }/${getData.getFullYear()}`;

  var time = getData.getHours() + ":" + getData.getMinutes();

  return [String(day), String(time)];
}
