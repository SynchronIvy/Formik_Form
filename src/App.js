import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      alert("Login Successful");
      //console.log("form: ", values);
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {errors.emailField = "Field required"} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = "Username should be an email"
      };
      if(!values.pswField) errors.pswField = "Field required"
      return errors;
    }
  })
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div name="emailError" style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div name="pswError" style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
