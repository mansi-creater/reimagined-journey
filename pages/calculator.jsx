import Head from "next/head";
import { useState, Fragment } from "react";
import classes from "../styles/calculator.module.css";

const Calculator = () => {
  const [digit, setDigit] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [operator, setOperator] = useState(``);
  const [onDisplay, setOnDisplay] = useState(``);
  const [previousOp, setPreviousOp] = useState(``);

  const performOp = (c, t, o) => {
    switch (o) {
      case `+`:
        return Number(c) + Number(t);
      case `-`:
        return Number(c) - Number(t);
      case `*`:
        return Number(c) * Number(t);
      case `/`:
        return Number(c) / Number(t);
      default:
        return;
    }
  };

  const setDisplay = (v) => {
    if ([`+`, `-`, `*`, `/`].includes(v)) {
      if (previous && previousOp) {
        const calculated = performOp(previous, digit, previousOp);
        setDigit(0);
        setPreviousOp(v);
        setPrevious(calculated);
        setOnDisplay(calculated + v);
        return;
      }
      {
        setPrevious(Number(digit));
        setOnDisplay((d) => d + v);
        setPreviousOp(operator || v);
        setOperator(v);
        setDigit(0);
      }
    } else {
      setDigit((digit) => String(digit) + String(v));
      setOnDisplay((d) => d + v);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Calculator</title>
      </Head>
      <div className={classes.container}>
        <div className={classes.content}>
          <input className={classes.input} value={onDisplay} readOnly type="text" placeholder="Enter any expression to evaluate" />

          <div className={classes.grid}>
            <div className={classes.row}>
              <button onClick={() => setDisplay(`+`)} className={classes.button}>
                +
              </button>
              <button onClick={() => setDisplay(`-`)} className={classes.button}>
                -
              </button>
              <button onClick={() => setDisplay(`*`)} className={classes.button}>
                *
              </button>
              <button onClick={() => setDisplay(`/`)} className={classes.button}>
                /
              </button>
            </div>
            <div className={classes.row}>
              <button onClick={() => setDisplay(7)} className={classes.button}>
                7
              </button>
              <button onClick={() => setDisplay(8)} className={classes.button}>
                8
              </button>
              <button onClick={() => setDisplay(9)} className={classes.button}>
                9
              </button>
            </div>
            <div className={classes.row}>
              <button onClick={() => setDisplay(4)} className={classes.button}>
                4
              </button>
              <button onClick={() => setDisplay(5)} className={classes.button}>
                5
              </button>
              <button onClick={() => setDisplay(6)} className={classes.button}>
                6
              </button>
            </div>
            <div className={classes.row}>
              <button onClick={() => setDisplay(1)} className={classes.button}>
                1
              </button>
              <button onClick={() => setDisplay(2)} className={classes.button}>
                2
              </button>
              <button onClick={() => setDisplay(3)} className={classes.button}>
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
