import React, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutine = ({ id, isPublic, setIsPublic, userRoutines, setUserRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsClicked(false);
    const updatedRoutine = await updateRoutine(id, name, goal, isPublic);
    const updated = userRoutines.map((update) => {
      if (update.id === id) {
        return updatedRoutine;
      } else {
        return update;
      }
    });
    setUserRoutines(updated);
  };

  return isClicked ? (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <hr />
        <label>Goal</label>
        <br />
        <input
          type="text"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        />
        <hr />
        <label>Public?</label>
        <br />
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <hr />
        <button className="EditBtn" type="submit">Submit The Edited Routine</button>
      </form>
    </div>
  ) : (
    <div>
      <button onClick={() => setIsClicked(true)}>Edit Routine</button>
    </div>
  );
};

export default EditRoutine;