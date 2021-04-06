import { useRouter } from "next/router";
import { useForm, useFieldArray } from "react-hook-form";
import { useStoreActions, useStoreState } from "../../../hooks";
import { LovedOne } from "../../../model/userInfo";
import style from "./index.module.css";

interface Step2Inputs {
  lovedOnes: LovedOne[];
}

const Step2 = () => {
  const router = useRouter();
  const currentState = useStoreState((state) => state.userInfo);
  const updateUserInfo = useStoreActions(
    (actions) => actions.userInfo.updateUserInfo
  );
  const { register, handleSubmit, control } = useForm<Step2Inputs>({
    defaultValues: {
      lovedOnes: [{ firstName: "Phil", lastName: "Nguyen" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lovedOnes",
  });

  const onSubmit = (data) => {
    currentState.newUser.lovedOnes = data.lovedOnes;
    updateUserInfo(currentState.newUser);

    router.push("/new/step3");
  };

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <div>
          <h2>Loved Ones</h2>
          <p>Add any known family members or loved ones.</p>
      </div>
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
