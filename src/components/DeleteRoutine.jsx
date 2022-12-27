import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ id, setUserRoutines, userRoutines }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    await deleteRoutine(id);
    const deletedRoutines = userRoutines.filter(
      (routines) => id !== routines.id
    );
    setUserRoutines(deletedRoutines);
  };

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default DeleteRoutine;