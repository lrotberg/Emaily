import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields = () =>
    formFields.map(({ label, name, id }) => (
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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  formFields.forEach(({ name }) => {
    if (!values[name]) errors[name] = "You must provide a value";
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
