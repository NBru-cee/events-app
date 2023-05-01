import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
     const [message, setMessage] = useState("");
     const inputEmail = useRef();
     const router = useRouter();
     const validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

     const onSubmit = async (e) => {
          e.preventDefault();
          const emailValue = inputEmail.current.value;
          const eventId = router?.query.id;
          if (!emailValue.match(validRegex)) {
               setMessage("Please introduce a correct email address");
          }
          try {
               //POST fetch request
               const response = await fetch("/api/emailRegistration", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                         email: emailValue,
                         eventId,
                    }),
               });

               if (!response.ok) throw new Error(`Error: ${response.status}`);
               const data = await response.json();
               setMessage(data.message);
               inputEmail.current.value = "";
          } catch (err) {
               console.log("ERROR:", err);
          }
     };
     return (
          <div className="event-single-page">
               <h1>{data.title}</h1>
               <Image
                    src={data.image}
                    alt={data.title}
                    width={700}
                    height={500}
               />
               <p className="desc">{data.description}</p>
               <form className="email-registration" onSubmit={onSubmit}>
                    <label htmlFor="email">
                         Get Registered for this event!
                    </label>
                    <input
                         type="text"
                         autoComplete="off"
                         placeholder="Please insert your email"
                         id="email"
                         ref={inputEmail}
                    />
                    <button type="submit">Submit</button>
               </form>
               <p>{message}</p>
          </div>
     );
};

export default SingleEvent;
