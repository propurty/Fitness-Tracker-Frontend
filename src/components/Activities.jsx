import React, { useState, useEffect } from "react";
import { getActivities } from "../api";
import { ActivityForm } from "./index";

const Activities = ({ loggedIn }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      await getActivities()
        .then((result) => {
          setActivities(result);
        })
        .catch(console.error);
    };
    fetchActivities();
  }, []);

  return (
    <div className="Components">
      {loggedIn ? (
        <ActivityForm activities={activities} setActivities={setActivities} />
      ) : null}
      {activities.map((activity) => {
        return (
          <div className="Cards" key={activity.id}>
            <p>Activity Name: {activity.name}</p>
            <p>Activity Description: {activity.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;