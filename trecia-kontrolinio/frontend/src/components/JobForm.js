import { useState } from "react";
import { useJobContext } from "../hooks/useJobContext";
import { useAuthContext } from "../hooks/useAuthContext";

const JobForm = () => {
  const { dispatch } = useJobContext();
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("Būtina prisijungti");
      return;
    }
    const darbas = { title, about, price, availability };
    const response = await fetch("/api/darbai", {
      method: "POST",
      body: JSON.stringify(darbas),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    }
    if (response.ok) {
      setEmptyFields([]);
      setTitle("");
      setAbout("");
      setPrice("");
      setAvailability("");
      setError(null);
      console.log("Naujas darbas pridėtas", json);
      dispatch({ type: "CREATE_JOB", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Sukurti naują darbą</h3>
      <label>Darbo pavadinimas</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label>Darbo užmokestis:</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes("price") ? "error" : ""}
      />
      <br></br>
      <label>Darbo aprašymas:</label>
      <textarea
        onChange={(e) => setAbout(e.target.value)}
        value={about}
        className={emptyFields.includes("about") ? "error" : ""}
      />
      <div className="galiojantis">
        <label>
          Ar darbas galiojantis?
          <input
            type="checkbox"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)}
            className={emptyFields.includes("availability") ? "error" : ""}
          />
        </label>
      </div>
      <br></br>
      <button>Sukurti darbą</button>
      {error && <div className="error">{error}</div>}
      <hr></hr>
    </form>
  );
};

export default JobForm;
