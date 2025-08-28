import { useEffect } from "react";
import JobDetails from "../components/JobDetails";
import JobForm from "../components/JobForm";
import { useJobContext } from "../hooks/useJobContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { darbai, dispatch } = useJobContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/darbai", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_JOBS", payload: json });
      }
    };

    fetchJobs();
  }, [dispatch, user]);

  return (
    <div className="home">
      <JobForm />
      <div className="jobs">
        {darbai && darbai.length > 0 ? (
          darbai.map((darbas) => (
            <JobDetails key={darbas._id} darbas={darbas} />
          ))
        ) : (
          <p>Kolkas darbų nėra</p>
        )}
      </div>
    </div>
  );
};

export default Home;
