import { Children, createContext, useReducer } from "react";

export const JobContext = createContext();

export const jobReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { darbai: action.payload || [] };
    case "CREATE_JOB":
      return { darbai: [action.payload, ...(state.darbai || [])] };
    case "DELETE_JOB":
      return {
        darbai: (state.darbai || []).filter(
          (darbas) => darbas._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const JobContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, {
    darbai: [],
  });

  return (
    <JobContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};
