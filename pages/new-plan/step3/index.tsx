import { MouseEvent } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { RallyPoint } from "../../../model/userInfo";
import Address from "../../../components/common/Address/Address";
import { Address as AddressType } from "../../../model/userInfo";
import { useRouter } from "next/router";

import style from "./index.module.css";

interface StepThreeInputs {
  rallyPoints: RallyPoint[];
}

const Step3 = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<StepThreeInputs>({
    defaultValues: {
      rallyPoints: [{ locationName: "", address: {} as AddressType }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rallyPoints",
  });

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    router.push("/new-plan/step2");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Rally Points</h2>
        <p>Add rally point locations during emergency events</p>
      </div>
      {fields.map((field, index) => (
        <div className={style["location-field-input"]} key={field.id}>
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
            <Address
              register={register}
              index={index}
              context={"rallyPoints"}
            />
          </div>
          <button
            className={`btn-secondary ${style["btn-secondary-remove"]}`}
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className={`${style["add-btn"]} btn-primary`}
        onClick={() => append({ locationName: "", address: {} as AddressType })}
      >
        Add
      </button>
      <button className="btn-primary" onClick={goBack}>
        Previous
      </button>
      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default Step3;
