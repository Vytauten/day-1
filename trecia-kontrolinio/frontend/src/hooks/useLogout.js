import { useJobContext } from "./useJobContext";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: darboDispatch } = useJobContext();

  const logout = () => {
    localStorage.removeItem("user");

    //jwt destroy
    dispatch({ type: "LOGOUT" });
    darboDispatch({ type: "SET_JOBS", payload: null });
  };
  return { logout };
};
