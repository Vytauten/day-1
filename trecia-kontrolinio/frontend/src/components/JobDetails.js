import { useJobContext } from "../hooks/useJobContext";

import { useAuthContext } from "../hooks/useAuthContext";

const JobDetails = ({ darbas }) => {
  const { dispatch } = useJobContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    const response = await fetch("/api/darbai/" + darbas._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JOB", payload: json });
    }
  };

  return (
    <div className="job-details">
      <h2>{darbas.title}</h2>
      <p>
        <strong>Darbo aprašymas:</strong> {darbas.about}
      </p>
      <p>
        <strong>Darbo užmokestis:</strong> {darbas.price}
      </p>
      <p>
        <strong>Ar darbas galioja:</strong>{" "}
        {darbas.availability ? "Taip" : "Ne"}
      </p>
      <br></br>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default JobDetails;
