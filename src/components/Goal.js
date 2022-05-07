import React from "react";

const Goal = ({ goal, updates }) => {
  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
      </label>
      <h2>{goal.fields.Title}</h2>
      <div>
        <h3>DETAILS</h3>
        <p>{goal.fields.Details}</p>
        <h3>UPDATES</h3>
        {/* {updates.map((update, index) => {
          <p key={index}>{update.fields.update}</p>;
        })} */}
      </div>
    </div>
  );
};

export default Goal;
