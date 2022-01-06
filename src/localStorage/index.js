import AuthenticatedUser from "../models/AuthenticatedUser";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const initialState = JSON.parse(serializedState);
    if (initialState.authenticatedUser) {
      initialState.authenticatedUser = new AuthenticatedUser(
        initialState.authenticatedUser.state
      );
    }
    return initialState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    let currentState = localStorage.getItem("state");
    currentState = currentState ? JSON.parse(currentState) : {};
    sessionStorage.setItem(
      "state",
      JSON.stringify({ ...currentState, ...state })
    );
  } catch {
    console.log("Cannot write in local storage");
  }
};
