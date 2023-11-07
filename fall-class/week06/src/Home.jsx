import React from "react";
import DayButton from "./DayButton";
import { Outlet, useParams } from "react-router-dom";

function Home() {
  const { day } = useParams();

  return (
    <div>
      <div>
        <h1>토익 영단어(고급)</h1>
        <button>단어 추가</button>
        <button>Day 추가</button>
      </div>

      {!day && (
        <div>
          <DayButton day={"1"} />
          <DayButton day={"2"} />
          <DayButton day={"3"} />
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default Home;
