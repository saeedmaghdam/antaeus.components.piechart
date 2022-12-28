import React, { Fragment } from 'react'

const RADIUS = 50;

const PieChartComponent = ({ label1, value1, label2, value2, postfix, color = "111" }) => {
  const val1 = parseFloat(value1);
  const val2 = parseFloat(value2);
  const total = val1 + val2;

  const percentage1 = val1 / total * 100;
  const percentage2 = val2 / total * 100;

  const angle1 = Math.floor(percentage1 / 100 * 360);
  const angle2 = 360 - angle1;

  const [x1, y1] = getCoordinates(RADIUS, angle1);
  const [x2, y2] = getCoordinates(RADIUS, angle2);

  console.log(percentage1, percentage2, angle1, angle2, x1, y1, x2, y2)

  return <>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
      <g transform="translate(50,50)" stroke="#000" strokeWidth="0">
        <g transform="rotate(-90) scale(1,-1)">
          <path d={`M ${RADIUS} 0 A ${RADIUS} ${RADIUS} 0 ${angle1 > 180 ? 1 : 0} 0 ${x1} ${-y1} A 0 0 0 0 0 0 0 Z`} fill="#FFABAB" />
          <path d={`M ${x1} ${-y1} A ${RADIUS} ${RADIUS} 0 ${angle2 > 180 ? 1 : 0} 0 50 0 A 0 0 0 0 0 0 0 Z`} fill="#ABFFBE" />
        </g>
        <circle cx="65" cy="-30" r="5" fill="#FFABAB" />
        <text x="73" y="-25" lengthAdjust="spacingAndGlyphs" fill={color}>{label1} <tspan fontWeight="bold">{val1.toLocaleString('en')}</tspan> <tspan fontSize="12" fontWeight="bold">{postfix}</tspan></text>
        <circle cx="65" cy="-10" r="5" fill="#ABFFBE" />
        <text x="73" y="-5" lengthAdjust="spacingAndGlyphs" fill={color}>{label2} <tspan fontWeight="bold">{val2.toLocaleString('en')}</tspan> <tspan fontSize="12" fontWeight="bold">{postfix}</tspan></text>
        <line x1="60" y1="15" x2="290" y2="15" stroke="#D3D3D3" strokeWidth="1" />
        <text x="73" y="35" lengthAdjust="spacingAndGlyphs" fill={color}>Total: <tspan fontWeight="bold">{total.toLocaleString('en')}</tspan> <tspan fontSize="12" fontWeight="bold">{postfix}</tspan></text>
      </g>
    </svg>
  </>
}

export default PieChartComponent;

const getCoordinates = (radius, angle) => {
  var y = radius * Math.sin(Math.PI * 2 * angle / 360);
  var x = radius * Math.cos(Math.PI * 2 * angle / 360);

  return [x, y]
}