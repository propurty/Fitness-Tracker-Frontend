export const getActivities = async () => {
    const url = "https://fitnesstrac-kr.herokuapp.com/api/activities";
  
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  };
  
  export const getRoutines = async () => {
    const url = "https://fitnesstrac-kr.herokuapp.com/api/routines";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  };
  
  export const getMyRoutines = async () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    return await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (response) => await response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);
  };
  
  export const accountLogin = async (username, password) => {
    return await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        return result.user.username;
      })
      .catch(console.error);
  };
  
  export const accountCreation = async (username, password) => {
    return await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        return result.user.username;
      })
      .catch(console.error);
  };
  
  export const getMe = async () => {
    const token = localStorage.getItem("token");
    return await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {})
      .catch(console.error);
  };
  
  export const newRoutine = async (name, goal, isPublic) => {
    return await fetch("https://fitnesstrac-kr.herokuapp.com/api/routines", {
      method: "POST",
      token: localStorage.getItem("token"),
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);
  };
  
  export const updateRoutine = async (routineId, name, goal, isPublic) => {
    const token = localStorage.getItem("token");
    return await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);
  };
  
  export const deleteRoutine = async (routineId) => {
    const token = localStorage.getItem("token");
    await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);
  };