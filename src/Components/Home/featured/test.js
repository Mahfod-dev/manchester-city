import React, { useState } from "react";
import { easePolyOut } from "d3-ease";
import { Animate } from "react-move";
const Test = () => {
  const [show, setShow] = useState(true);
  const [bck, setBck] = useState("#ffff");
  return (
    <>
      <button
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setBck("red")}
      >
        Update
      </button>
      <button
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setShow(false)}
      >
        Remove
      </button>
      <button
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        Show
      </button>
      <Animate
        show={show}
        start={{
          backgroundColor: bck,
          width: 500,
          height: 500,
          opacity: 1,
        }}
        enter={{
          width: [100],
          height: [100],
          opacity: [1],
          timing: {
            duration: 1000,
            delay: 1000,
            ease: easePolyOut,
          },
        }}
        update={{
          backgroundColor: bck,
          opacity: [0.5],
          timing: {
            duration: 2000,
            delay: 1000,
            ease: easePolyOut,
          },
          events: {
            start: () => {
              console.log("started");
            },
            end: () => {
              console.log("end");
            },
          },
        }}
        leave={[
          {
            backgroundColor: bck,
            width: [1000],
            height: [1000],
            opacity: [0],
            timing: {
              duration: 500,
              delay: 1000,
              ease: easePolyOut,
            },
          },
          {
            opacity: [0],
            timing: {
              delay: 2000,
              duration: 3000,
              ease: easePolyOut,
            },
          },
        ]}
      >
        {({ width, height, opacity, backgroundColor }) => (
          <div style={{ backgroundColor, width, height, opacity }}>hello</div>
        )}
      </Animate>
    </>
  );
};
export default Test;
