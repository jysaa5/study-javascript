function Search({ patients, patient, setRecord, show }) {
  const handleChangedPatient = (e) => {
    const selected = patients.find((patient) => String(patient.userId) === String(e.target.value));

    if (!selected) {
      setRecord(PATIENT_INITIAL);
      return;
    }
    setRecord(selected);
  };

  const handleShowRecord = () => {
    if (patient.userId !== "") {
      show();
    } else {
      alert("Please select a patient name");
    }
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={handleChangedPatient} value={patient.userId || "0"}>
          <option value="0" disabled>
            Select Patient
          </option>
          {patients.map((p) => (
            <option key={p.userId} value={p.userId}>
              {p.userName}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" data-testid="show" onClick={handleShowRecord}>
        Show
      </button>
    </div>
  );
}

export default Search;
