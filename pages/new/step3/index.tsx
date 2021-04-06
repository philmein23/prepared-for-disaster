import { useForm, useFieldArray } from "react-hook-form";
import { RallyPoint } from "../../../model/userInfo";
import Address from "../../../components/common/Address/Address";

interface StepThreeInputs {
  rallyPoints: RallyPoint[];
}

const Step3 = () => {
  const { register, handleSubmit, control } = useForm<StepThreeInputs>({
    defaultValues: {
      rallyPoints: [{ locationName: "", address: null }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rallyPoints",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form>
      <div>
        <h2>Rally Points</h2>
        <p>Add rally point locations during emergency events</p>
      </div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div>
            <label htmlFor="location-name">Location Name</label>
            <input
              id="first-name"
              type="text"
              defaultValue={field.locationName}
              {...register(`rallyPoints.${index}.locationName` as const, {
                required: true,
              })}
            />
          </div>
          <div>
            <Address register={register} />
          </div>
          <button
            className={`btn-secondary`}
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className={`btn-primary`}
        onClick={() => append({ locationName: "" })}
      >
        Add
      </button>
      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default Step3;
