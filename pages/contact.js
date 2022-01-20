import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            firstName: firstName,
            email: email,
            message: message,
          };
        }}
      >
        <label htmlFor="firstName">
          <input
            style={{
              height: "25px",
            }}
            placeholder="First Name"
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              handleOnChangeEvent(e);
            }}
          ></input>
        </label>
        <br></br>
        <label htmlFor="email">
          <input
            style={{
              height: "25px",
            }}
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleOnChangeEvent(e);
            }}
          ></input>
        </label>
        <br></br>
        <label htmlFor="message">
          <textarea
            style={{
              width: "170px",
              height: "50px",
            }}
            placeholder="Message"
            type="message"
            name="message"
            value={message}
            onChange={(e) => {
              handleOnChangeEvent(e);
            }}
          ></textarea>
        </label>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      <br></br>
      <section>First Name: {firstName}</section>
      <br></br>
      <section>Email: {email}</section>
      <br></br>
      <section>message: {message}</section>
    </div>
  );
}
