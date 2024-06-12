import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
export const Contact = () => {
  const errorObj = {
    required: "enter a name",
    pattern: "name error",
    minLength: "minLength 3",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // toast("Wow so easy!", { position: toast.POSITION.TOP_CENTER });
    toast.success("send message :)",{position:"top-center"})
    toast.error("error message",{position:"bottom-center"})
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <h5>Phone: 88 670 28 18</h5>
      <h5>Email :behruzp330@gmail.com</h5>
      <h5>telegram :behruzpardayev_1</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Send Message</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          {...register("name", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            minLength: 3,
          })}
          className={errors.name?.type ? "errorInput" : ""}
        />
        <span>{errorObj[errors.name?.type]}</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="exapmle@gmail.com"
          className={errors.email?.type ? "errorInput" : ""}
          {...register("email", { required: "enter a email" })}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          placeholder="message"
          {...register("message", { required: "enter a message" })}
          className={errors.email?.type ? "errorTextArea" : ""}
        ></textarea>
        <span>{errors.message?.message}</span>
        <button>Sumbit</button>
        <ToastContainer />
      </form>
    </div>
  );
};
