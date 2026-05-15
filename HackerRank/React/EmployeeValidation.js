import { useState } from "react";

const FORM_INITIAL = { name: "", email: "", employeeId: "", joiningDate: "" };

function EmployeeValidationForm() {
  const [form, setForm] = useState(FORM_INITIAL);

  const regExpName = /^[a-zA-Z ]{4,}$/;
  const errorName = !regExpName.test(form.name);

  const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;
  const errorEmail = !regExpEmail.test(form.email);

  const regExpEmployeeId = /^[0-9]{6}$/;
  const errorEmployeeId = !regExpEmployeeId.test(form.employeeId);

  const errorJoiningDate = form.joiningDate === "" || new Date(Date.parse(form.joiningDate)) > new Date(Date.parse("2024-04-12"));

  const disableSubmit = form.name === "" || form.email === "" || form.employeeId === "" || form.joiningDate === "" || errorName || errorEmail || errorEmployeeId || errorJoiningDate;

  const handleChangedForm = (e, type) => {
    setForm((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const submitForm = () => {
    setForm(FORM_INITIAL);
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input className="w-100" type="text" name="name" value={form.name} placeholder="Name" data-testid="input-name-test" onChange={(e) => handleChangedForm(e, "name")} />
        {errorName && <p className="error mt-2">Name must be at least 4 characters long and only contain letters and spaces</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input className="w-100" type="text" name="email" value={form.email} placeholder="Email" data-testid="input-email-test" onChange={(e) => handleChangedForm(e, "email")} />
        {errorEmail && <p className="error mt-2">Email must be a valid email address</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input className="w-100" type="text" name="employeeId" value={form.employeeId} placeholder="Employee ID" data-testid="input-employee-id-test" onChange={(e) => handleChangedForm(e, "employeeId")} />
        {errorEmployeeId && <p className="error mt-2">Employee ID must be exactly 6 digits</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input className="w-100" type="date" name="joiningDate" value={form.joiningDate} placeholder="Joining Date" data-testid="input-joining-date-test" onChange={(e) => handleChangedForm(e, "joiningDate")} />
        {errorJoiningDate && <p className="error mt-2">Joining Date cannot be in the future</p>}
      </div>
      <button data-testid="submit-btn" type="submit" disabled={disableSubmit} onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
