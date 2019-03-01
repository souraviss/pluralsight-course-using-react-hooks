import React from "react";
import PropTypes from "prop-types";

function testsvg(props) {
  return (
    <div>
      <React.Fragment>
        <style jsx global>{`
            .circle-loader {
              display: block;
              text-center;
              padding-left: 50%;
            }

            .circle-loader .circle {
              position: relative;
              left: -30px;
              fill: transparent;
              stroke: rgba(0,0,0,0.2);
              stroke-width: 4px;
              animation: dash 2s ease infinite, rotate 2s linear infinite;
            }

            @keyframes dash {
              0% {
                stroke-dasharray: 1,95;
                stroke-dashoffset: 0;
              }
              50% {
                stroke-dasharray: 85,95;
                stroke-dashoffset: -25;
              }
              100% {
                stroke-dasharray: 85,95;
                stroke-dashoffset: -93;
              }
            }

            @keyframes rotate {
              0% {transform: rotate(0deg); }
              100% {transform: rotate(360deg); }
            }
          `}</style>

        <svg
          viewBox="0 0 645 585"
          width="22"
          height="25"
          fill-opacity="0.9"
          fill="red"
        >
          <animate attributeType="CSS" attributeName="opacity"
                   from="1" to="0" dur="5s" repeatCount="indefinite" />
          <defs id="defs4" />
          <g id="layer1">
            <path
              d="M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z"
              id="path2417"
            />
            <g transform="translate(129.28571,-64.285714)" id="g2221" />
          </g>
        </svg>
      </React.Fragment>
    </div>
  );
}

testsvg.propTypes = {};
testsvg.defaultProps = {};

export default testsvg;
