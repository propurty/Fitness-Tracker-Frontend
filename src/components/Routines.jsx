import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      await getRoutines()
        .then((result) => {
          setRoutines(result);
        })
        .catch(console.error);
    };
    fetchRoutines();
  }, []);

  return (
    <div className="Components">
      {routines.map((routine) => {
        return (
          <div className="Cards" key={routine.id}>
            <p>Creator Name: {routine.creatorName}</p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            {routine.activities.map((activity) => {
              return (
                <div className="Cards" key={activity.id}>
                  <p>Name: {activity.name}</p>
                  <p>Description: {activity.description}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Count: {activity.count}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Routines;