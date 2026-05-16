import { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const PATIENT_INITIAL = { userId: "", userName: "", userDob: "" };

const App = () => {
  const patients = medical_records
    .map((record) => record.data)
    .flat()
    .map((d) => ({ userId: d.userId, userName: d.userName, userDob: d.userDob }));

  const uniquePatients = [...new Map(patients.map((user) => [user.userId, user])).values()];

  const [patient, setPatient] = useState(PATIENT_INITIAL);
  const [show, setShow] = useState(false);

  const selectRecord = (select) => {
    setPatient(select);
    setShow(false);
  };

  const showRecord = () => {
    setShow(true);
  };

  const changePatient = () => {
    const current = uniquePatients.findIndex((p) => p.userId === patient.userId);
    const length = uniquePatients.length;

    if (current < length - 1) {
      setPatient(uniquePatients[current + 1]);
    } else {
      setPatient(uniquePatients[0]);
    }
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search patients={uniquePatients} setRecord={selectRecord} show={showRecord} patient={patient} />
        <Records patient={show ? patient : PATIENT_INITIAL} onNextPatient={changePatient} />
      </div>
    </div>
  );
};

export default App;
