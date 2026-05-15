function Input({ form, onChange }) {
  const handleChangedForm = (e, type) => {
    onChange({ ...form, [type]: e.target.value });
  };

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={form.title} data-testid="title-input" onChange={(e) => handleChangedForm(e, "title")} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={form.description} data-testid="description-input" onChange={(e) => handleChangedForm(e, "description")} />
    </div>
  );
}

export default Input;
