import style from "./Address.module.css";

const Address = ({ register }) => {
  return (
    <>
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
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="text"
          id="zipcode"
          {...register("zipcode", { required: true })}
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
    </>
  );
};

export default Address;
