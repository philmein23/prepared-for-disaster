import { useForm } from 'react-hook-form';

import style from './index.module.css';

interface Inputs {
    firstName: string;
    lastName: string;
    address: string;
}

const NewRegistration = () => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" {...register('firstName', { required: true })} />
            </div>
            <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" {...register('lastName', { required: true })} />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <textarea id="address" {...register('address', { required: true})}></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default NewRegistration;