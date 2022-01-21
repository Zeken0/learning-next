import { useFormik } from "formik";

export default function ContactUs() {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      musicTaste: "",
      message: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length < 2) {
        errors.firstName = "Please dont lie";
      }
      return errors;
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        />
        <p style={{ color: "red" }}>{errors.firstName}</p>
        <br />
        <input
          id="lastName"
          name="lastName"
          placeholder="Jibril"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          id="email"
          name="email"
          placeholder="blabla@live.com"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <select
          id="musicTaste"
          name="musicTaste"
          value={values.musicTaste}
          onChange={handleChange}
        >
          <option value="default">Music</option>
          <option value="Classical">Classical</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Pop">Pop</option>
        </select>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="say somthing"
          value={values.message}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
