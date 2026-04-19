import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>Forms in React</h1>
      <p>Learn how to handle forms in React with ease!</p>
      <form
        onSubmit={handleSubmit(submit)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label htmlFor="name">Name:</label>+
        <input
          {...register("name", { required: "Name is needed" })}
          // type="text"
          // id="name"
          // placeholder="Enter your name"
        />
        {errors.name && (
          <p style={{ color: "red", margin: 0 }}>{errors.name.message}</p>
        )}
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", { required: "Email is needed" })}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p style={{ color: "red", margin: 0 }}>{errors.email.message}</p>
        )}
        <label htmlFor="message">Message:</label>
        <textarea
          {...register("message", { required: "Message is needed" })}
          id="message"
          name="message"
          placeholder="Enter your message"
        ></textarea>
        {errors.message && (
          <p style={{ color: "red", margin: 0 }}>{errors.message.message}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default App;
