import { useForm } from "react-hook-form";
import { useStoreActions } from "../../hooks";
import { useRouter } from "next/router";
import Address from "../../components/common/Address/Address";
import { Address as AddressType } from "../../model/userInfo";

import style from "./index.module.css";

export interface StepOneInputs {
  firstName: string;
  lastName: string;
  address: AddressType;
}

const FirstStep = () => {
  const updateUserInfo = useStoreActions(
    (actions) => actions.userInfo.updateUserInfo
  );
  const { register, handleSubmit } = useForm<StepOneInputs>();
  const router = useRouter();

  const onSubmit = (data) => {
    updateUserInfo(data);

    router.push("/new-plan/step3");
  };

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>User Information</h2>
        <p>Enter your personal information</p>
      </div>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          {...register("firstName", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          {...register("lastName", { required: true })}
        />
      </div>
      <Address register={register} />

      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default FirstStep;
