import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "./postSlice";
import { nanoid } from "nanoid";

function PostForm() {

const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const fullData = ({...data, id: nanoid()});
    dispatch(addBook(fullData))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="bookName" {...register("bookName", {})} />
      <input type="text" placeholder="writer" {...register("writer", {})} />

      <input type="submit" />
    </form>
  );
}

export default PostForm;
