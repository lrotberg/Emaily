import React from "react";

const SurveyField = props => {
  const {
    input,
    id,
    label,
    meta: { error, touched }
  } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
