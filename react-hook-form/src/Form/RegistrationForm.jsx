import { useFieldArray, useForm } from "react-hook-form";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Basic Details">
          <Field label="Full Name" error={errors.fName}>
            <input
              {...register("fName", { required: "Full Name is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fName ? "border-red-500" : "border-gray-500"
              }`}
              type="text"
              name="fName"
              id="fName"
              placeholder="Enter Your full name"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 and 100",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? "border-red-500" : "border-gray-500"
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter Your Age"
            />
          </Field>

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

        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex justify-between items-center w-max"
              >
                <Field label="Social Name">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                  />
                </Field>
                <Field label="Social URL">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                  />
                </Field>
                <button
                  className="mt-8 mr-2 text-2xl"
                  onClick={() => remove(index)}
                >
                  &#8722;
                </button>
              </div>
            );
          })}
          <button
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
        </FieldSet>

        <div>{errors?.root?.random.message}</div>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
