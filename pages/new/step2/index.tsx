import { useForm, useFieldArray } from "react-hook-form";
import style from "./index.module.css";

interface Inputs {
  firstName: string;
  lastName: string;
}

const Step2 = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      lovedOnes: [{ firstName: "Phil", lastName: "Nguyen" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lovedOnes",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <h2>Add your loved ones</h2>
      {fields.map((field, index) => (
        <div className={style["field-input-container"]} key={field.id}>
          {console.log(field)}
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              defaultValue={field.firstName}
              {...register(`lovedOnes.${index}.firstName` as const, {
                required: true,
              })}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              defaultValue={field.lastName}
              {...register(`lovedOnes.${index}.lastName` as const, {
                required: true,
              })}
            />
          </div>
          <button
            className={`${style["btn-remove"]} btn-secondary`}
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className={`btn-primary ${style["add-btn"]}`}
        onClick={() => append({ firstName: "", lastName: "" })}
      >
        Add
      </button>
      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default Step2;
