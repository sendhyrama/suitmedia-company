import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // check data onsubmit
  const onSubmit = (data) => {
    window.location.reload();
  };

  return (
    <div className="form  h-[500px] flex relative flex-col justify-start items-center">
      <h1 className="uppercase font-bold text-2xl py-5">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" font-medium lg:w-[500px] w-full px-24 lg:px-0 flex flex-col gap-5 ">
        <div>
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            className={`block border-2 outline-sky-600/[0.7] ${
              errors.name?.type === "required"
                ? "border-red-500/[0.6]"
                : "border-neutral-300"
            } mt-2 px-2 py-1 w-full`}
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">This Field is required</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            className={`block outline-sky-600/[0.7] ${
              errors.email?.type === "required"
                ? "border-red-500/[0.6]"
                : "border-neutral-300"
            } border-2 px-2 py-1 mt-2 w-full`}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">This Field is required</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="3"
            className={`block outline-sky-600/[0.7] ${
              errors.message?.type === "required"
                ? "border-red-500/[0.6]"
                : "border-neutral-300"
            } mt-2 px-2 border-2 w-full`}
            {...register("message", { required: true })}></textarea>
          {errors.message?.type === "required" && (
            <p className="text-red-500">This Field is required</p>
          )}
        </div>
        <button
          type="submit"
          name="submit"
          className="uppercase bg-sky-600/[0.7] text-white py-1.5">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
