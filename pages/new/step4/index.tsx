import { MouseEvent } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useRouter } from "next/router";

const Step4 = () => {
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
  
      router.push("/new/step2");
    };
  
    const onSubmit = (data) => {
      console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2>Emergency Kit</h2>
                <p>Add one or more emergency kits you will need during an emergency event.</p>
            </div>
        </form>
    )
}

export default Step4;