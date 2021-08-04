import React from "react";

interface ScoreInfoProps {
  wins: number;
  losses: number;
  equal: number;
}

const ScoreInfo = ({ wins, losses, equal }: ScoreInfoProps) => {
  return (
    <section className="mt-2">
      <div className="pl-2 mb-2 border-bottom d-flex justify-content-between align-items-center">
        <h6>Info</h6>
      </div>

      <ul className="border rounded list-unstyled p-2 bg-light">
        <li>
          <p className="mb-0 text-success">
            Wins: <span className="text-dark">{wins}</span>
          </p>
        </li>
        <li>
          <p className="mb-0 text-info">
            Equal: <span className="text-dark">{equal}</span>
          </p>
        </li>
        <li>
          <p className="mb-0 text-danger">
            Losses: <span className="text-dark">{losses}</span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ScoreInfo;
