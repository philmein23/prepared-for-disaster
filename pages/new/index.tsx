import { useForm } from "react-hook-form";
import { useStoreActions } from "../../hooks";
import { useRouter } from "next/router";

import style from "./index.module.css";

interface Inputs {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  country: string;
}

const FirstStep = () => {
  const updateUserInfo = useStoreActions(
    (actions) => actions.userInfo.updateUserInfo
  );
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit = (data) => {
    updateUserInfo(data);

    router.push("/new/step2");
  };

  return (
    <form className={style["form-container"]} onSubmit={handleSubmit(onSubmit)}>
      <h2>User Information</h2>
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
      <div>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          {...register("address", { required: true })}
        ></textarea>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          {...register("state", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          {...register("country", { required: true })}
        />
      </div>

      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default FirstStep;
