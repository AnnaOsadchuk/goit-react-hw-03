import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{9}$/, "Must be exactly 9 digits")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const userNameId = useId();
  const userPhoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapperForm}>
        <div className={css.wrapinput}>
          <label className={css.label} htmlFor={userNameId}>
            Name
          </label>
          <Field className={css.input} name="username" id={userNameId} />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>
        <div className={css.wrapinput}>
          <label className={css.label} htmlFor={userPhoneId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="phone"
            id={userPhoneId}
          />
          <ErrorMessage name="phone" component="div" className={css.error} />
        </div>
        <div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
