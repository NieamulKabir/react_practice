import Field from "./Field";
import FieldSet from "./FieldSet";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "x@example.com", password: "12345678" };
    const found =
      formData.email === user.email && formData.password === user.password;
      if (!found) {
        setError("root.random",{
            message
        })
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-500"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8  characters",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-500"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password Address"
            />
          </Field>
        </FieldSet>
        <div>

        </div>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg  bg-purple-500 ml-2">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
