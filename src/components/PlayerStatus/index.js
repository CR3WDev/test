import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { PlayerImageBox } from "./PlayerStatus";
import { playersData } from "../../playersData";
import "react-circular-progressbar/dist/styles.css";
const PlayerStatus = () => {
  const playerLoged = 0;
  const player = playersData[playerLoged];

  return (
    <div style={{ width: 133 }}>
      <CircularProgressbarWithChildren
        value={player.frequency}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#066671",
          trailColor: "transparent",
          strokeLinecap: "butt",
        })}
      >
        <div style={{ width: 107 }}>
          <CircularProgressbarWithChildren
            value={player.apprenticeship}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: "#01414a",
              trailColor: "transparent",
              strokeLinecap: "butt",
            })}
          >
            <div style={{ width: 87 }}>
              <CircularProgressbarWithChildren
                value={player.points}
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: "#002529",
                  trailColor: "transparent",
                  strokeLinecap: "butt",
                })}
              >
                <PlayerImageBox>
                  <img src={player.profileImage} alt={[player.name]} />
                </PlayerImageBox>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default PlayerStatus;
