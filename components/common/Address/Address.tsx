import style from "./Address.module.css";

const Address = ({ register, index = null, context = null }) => {
  let input =
    context != null && index !== null ? `${context}.${index.toString()}.` : "";
  return (
    <>
      <div>
        <label htmlFor="address">Street</label>
        <textarea
          id="address"
          {...register(`${input}address.street`, { required: true })}
        ></textarea>
      </div>
      <div>
        <label htmlFor="address">City</label>
        <textarea
          id="address"
          {...register(`${input}address.city`, { required: true })}
        ></textarea>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          {...register(`${input}address.state`, { required: true })}
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="text"
          id="zipcode"
          {...register(`${input}address.zipcode`, { required: true })}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          {...register(`${input}address.country`, { required: true })}
        />
      </div>
    </>
  );
};

export default Address;
