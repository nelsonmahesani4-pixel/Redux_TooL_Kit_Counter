import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice.js";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="card">
        <h1>Redux Counter</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button className="btn increment"onClick={() => dispatch(increment())}>
            +
          </button>

          <button
            className="btn decrement"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>

          <button
            className="btn reset"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;