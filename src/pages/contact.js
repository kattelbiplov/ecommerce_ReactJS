import React from "react";
import useTitle from "../hooks/useTitle";
import { Formik } from "formik";
const Contact = () => {
  useTitle("Contact Us");
  return (
    <React.Fragment>
      <Formik initialValues={{ fullname: "", email: "", message: "" }}>
        {" "}
        {({ handleChange, handleSubmit, errors, values }) => {
          return (
            <form>
              <label> Full Name </label>{" "}
              <input type="text" name="fullname" onChange={handleChange} />{" "}
              <br />
              <label> Email </label>{" "}
              <input type="text" name="email" onChange={handleChange} /> <br />
              <label> Message </label>{" "}
              <input type="text" name="message" onChange={handleChange} />{" "}
              <br />
              <input type="submit" value="Submit" />
            </form>
          );
        }}{" "}
      </Formik>{" "}
    </React.Fragment>
  );
};

export default Contact;
