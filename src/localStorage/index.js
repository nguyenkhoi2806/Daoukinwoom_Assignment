import AuthenticatedUser from "../models/AuthenticatedUser";

export const loadUserFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return null;
    }
    const initialState = JSON.parse(serializedState);
    if (initialState.data) {
      return AuthenticatedUser.create(initialState.data);
    }
  } catch (err) {
    return null;
  }
};

export const saveUserToStorage = state => {
  try {
    let currentState = localStorage.getItem("state");
    currentState = currentState ? JSON.parse(currentState) : {};
    localStorage.setItem(
      "state",
      JSON.stringify({ ...currentState, ...state })
    );
  } catch {
    console.log("Cannot write in local storage");
  }
};
