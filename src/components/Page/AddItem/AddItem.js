import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
     console.log(data);
     const url = `https://peaceful-crag-68907.herokuapp.com/perfume`;
     fetch(url, {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((res) => res.json())
       .then((result) => {
         console.log(result);
       });
   };

  return (
    <div className="w-50 mx-auto posi">
      <h2>Please add a item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="supplierName"
          {...register("supplierName", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="shortDescripttion"
          {...register("shortDescripttion")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("Quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("picture")}
        />
        <input className="btn btn-primary" type="submit" value="Add item" />
      </form>
    </div>
  );
};

export default AddItem;