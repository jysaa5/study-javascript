import medical_records from "../medicalRecords";

function Records({ patient, onNextPatient }) {
  const patients = medical_records.map((record) => record.data).flat();

  const disabledNext = patient.userId.length === 0;

  const handleNext = () => {
    onNextPatient();
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const records = patients.filter((p) => p.userId === patient.userId);

  if (disabledNext) {
    return null;
  }

  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{patient.userName}</h4>
          <h5 id="patient-dob">DOB: {patient.userDob}</h5>
          <h5 id="patient-height">Height: {records.length > 0 ? records[0].meta.height : ""} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" type="button" disabled={disabledNext} onClick={handleNext}>
          Next
        </button>
      </div>
      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {records.map((record, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{formatDate(record.timestamp)}</td>
              <td>{record.diagnosis.name}</td>
              <td>{record.meta.weight}</td>
              <td>{record.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
