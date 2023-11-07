import React from "react";
import { useParams } from "react-router-dom";

function Day() {
  const { day } = useParams();

  console.log(day);

  const voca = [
    [
      ["school", "학교"],
      ["pencil", "연필"],
    ],
    [
      ["apple", "사과"],
      ["banana", "바나나"],
    ],
    [
      ["boy", "남자아이"],
      ["girl", "여자아이"],
    ],
  ];

  return (
    <div>
      <div>Day {day}</div>
      <table>
        <tbody>
          {voca[day ? day-1 : 0].map((e) => (
            <tr key={e[0]}>
              <td>{e[0]}</td>
              <td>{e[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
