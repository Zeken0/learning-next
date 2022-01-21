import { useFormik } from "formik";
import * as yup from "yup";

export default function ContactUs() {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      musicTaste: "",
      message: "",
    },

    validationSchema: yup.object({
      firstName: yup.string().min(2, "Too short!").required("Required!"),
      lastName: yup.string().min(2, "Too short!").required("Required!"),
      email: yup.string().email("Invalid emal address!").required("Required!"),
      musicTaste: yup.string().required("Required!"),
      message: yup
        .string()
        .min(2, "Too short!")
        .max(200, "we dont need a story")
        .trim()
        .required("Required!"),
    }),

    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 800);
    },
  });
  console.log("errors:", errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          placeholder="Ahmed"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.firstName && errors.firstName}</p>

        <input
          id="lastName"
          name="lastName"
          placeholder="Jibril"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.lastName && errors.lastName}</p>

        <input
          id="email"
          name="email"
          placeholder="blabla@live.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.email && errors.email}</p>

        <select
          id="musicTaste"
          name="musicTaste"
          value={values.musicTaste}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="default">Genre</option>
          <option value="Classical">Classical</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Pop">Pop</option>
        </select>
        <p style={{ color: "red" }}>
          {touched.musicTaste && errors.musicTaste}
        </p>

        <textarea
          id="message"
          name="message"
          placeholder="say somthing"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.message && errors.message}</p>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button style={{ color: "red" }} type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}
