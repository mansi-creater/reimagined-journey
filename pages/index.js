import AnalogClock from "analog-clock-react";
import { useState } from "react";

let options = {
  useCustomTime: true, // set this to true
  width: "300px",
  border: true,
  borderColor: "#2e2e2e",
  baseColor: "#17a2b8",
  centerColor: "#459cff",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "#d81c7a",
    minute: "#ffffff",
    hour: "#ffffff",
  },
  seconds: 1, // set your
  minutes: 10, // own
  hours: 22, // time here.
};
const updateClock = () => {
  const date = new Date();
  const [tx, setTx] = useState(options);
  setInterval(() => {
    setTx({
      ...options,
      seconds: date.getSeconds(),
      minutes: date.getMinutes(),
      hours: date.getHours(),
    });
  }, 1000);
  return <AnalogClock {...tx} />;
};

// this.interval = setInterval(this.updateClock, 1000);
export default updateClock;
