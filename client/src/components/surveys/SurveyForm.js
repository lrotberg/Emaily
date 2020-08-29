import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title", id: "survey-title" },
  { label: "Subject Line", name: "subject", id: "survey-subject" },
  { label: "Email Body", name: "body", id: "survey-body" },
  { label: "Recipient List", name: "emails", id: "survey-emails" }
];

class SurveyForm extends Component {
  renderFields = () =>
    FIELDS.map(({ label, name, id }) => (
      <Field
        key={id}
        label={label}
        type="text"
        name={name}
        id={id}
        component={SurveyField}
      />
    ));

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            cancel
            <i className="material-icons right">close</i>
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

// const SurveyForm = props => (
//   <div>
//     <form onSubmit={props.handleSubmit(values => console.log(values))}>
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );

const validate = values => {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) errors[name] = "You must provide a value";
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
