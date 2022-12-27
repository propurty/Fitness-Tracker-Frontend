import React, { useState, useEffect } from "react";
import MyRoutineForm from "./MyRoutineForm";
import EditRoutine from "./EditRoutine";
import DeleteRoutine from "./DeleteRoutine";
import { getMyRoutines } from "../api";

const MyRoutines = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [userRoutines, setUserRoutines] = useState([]);
  useEffect(() => {
    const fetchRoutines = async () => {
      await getMyRoutines()
        .then((result) => {
          setUserRoutines(result);
        })
        .catch(console.error);
    };
    fetchRoutines();
  }, []);

  return (
    <div className="Components">
      <MyRoutineForm
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      {userRoutines ? (
        userRoutines.map((routine) => {
          return (
            <div className="Cards" key={routine.id}>
              <h3>Routine Creator: {routine.creatorName}</h3>
              <h3>Routine Name: {routine.name}</h3>
              <h3>Routine Goal: {routine.goal}</h3>
              <EditRoutine
                isPublic={isPublic}
                setIsPublic={setIsPublic}
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                origName={routine.name}
                origGoal={routine.goal}
                id={routine.id}
              />
              <DeleteRoutine
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                id={routine.id}
              />
            </div>
          );
        })
      ) : (
        <p className="Misc">No Routines to display</p>
      )}
    </div>
  );
};

export default MyRoutines;