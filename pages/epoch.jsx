import dayjs from "dayjs";
import Head from "next/head";
import { Fragment, useState } from "react";
import classes from "../styles/epoch.module.css";

const Epoch = () => {
  const [timestamp, setTimestamp] = useState(``);

  setInterval(() => {
    setTimestamp(String(dayjs().unix()));
  }, 1000);

  return (
    <Fragment>
      <Head>
        <title>UNIX EPOCH</title>
      </Head>

      <div className={classes.container}>
        <div className={classes.countdown}>
          {timestamp.split(``).map((x, idx) => (
            <div className={classes.digit} key={`${x}-${idx}`}>
              {x}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Epoch;
