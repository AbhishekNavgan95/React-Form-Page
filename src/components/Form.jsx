import React from "react";
import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: true,
    candidates: true,
    offers: true,
    pushNotifications: "",
  });

  function inputHandler(event) {
    const { name, value, checked, type } = event.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(userData);
  }

  return (
    <div className="">
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="fName">
            First Name
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.fName}
            type="text"
            name="fName"
            id="fName"
            placeholder="Pranay"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="lName">
            Last Name
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.lName}
            type="text"
            name="lName"
            id="lName"
            placeholder="Gopta"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="email">
            Last Name
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.email}
            type="text"
            name="email"
            id="email"
            placeholder="pgupta@duck.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="country">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="border border-black px-1 py-1 text-sm rounded"
            value={userData.country}
            onChange={inputHandler}
          >
            <option value="India">India</option>
            <option value="US">US</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="address">
            Street adress
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.address}
            type="text"
            name="address"
            id="address"
            placeholder="1234 main St."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="city">
            City
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.city}
            type="text"
            name="city"
            id="city"
            placeholder="Asansol"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="state">
            State/Province
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.state}
            type="text"
            name="state"
            id="state"
            placeholder="West Bemgol"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold" htmlFor="zip">
            ZIP / Postal code
          </label>
          <input
            className="border border-black px-2 py-1 text-sm rounded"
            onChange={inputHandler}
            value={userData.zip}
            type="number"
            name="zip"
            id="zip"
            placeholder="123456"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-bold mb-3" htmlFor="">
            By Email
          </label>
          <div className="flex gap-2">
            <input
              onChange={inputHandler}
              checked={userData.comments}
              type="checkbox"
              name="comments"
              id="comments"
            />
            <label className="text-xs font-bold" htmlFor="comments">
              comments
            </label>
          </div>
          <p className="text-xs ml-5 my-1">
            Get notified when someone posts a comment on a posting
          </p>
          <div className="flex gap-2 my-1">
            <input
              onChange={inputHandler}
              checked={userData.candidates}
              type="checkbox"
              name="candidates"
              id="candidates"
            />
            <label className="text-xs font-bold" htmlFor="candidates">
              Candidates
            </label>
          </div>
          <p className="text-xs ml-5 my-1">
            Get notified when a candidate applies for a job
          </p>
          <div className="flex gap-2">
            <input
              onChange={inputHandler}
              checked={userData.offers}
              type="checkbox"
              name="offers"
              id="offers"
            />
            <label className="text-xs font-bold" htmlFor="offers">
              Offers
            </label>
          </div>
          <p className="text-xs ml-5 my-1">
            Get notified when a candidate accepts or rejects an offer
          </p>
        </div>

        <div className="flex flex-col ">
          <div className="mb-3">
            <label className="text-xs font-bold ">Push Notifications</label>
            <p className="text-xs">These are delivered via SMS to your mobile phone</p>
          </div>

          <div className="flex gap-2">
            <input
              onChange={inputHandler}
              checked={userData.pushNotifications === "everything"}
              type="radio"
              name="pushNotifications"
              value="everything"
              id="everything"
            />
            <label className="text-xs font-bold my-1" htmlFor="everything">Everything</label>
          </div>

          <div className="flex gap-2">
            <input
              onChange={inputHandler}
              checked={userData.pushNotifications === "same-as-email"}
              type="radio"
              name="pushNotifications"
              value="same-as-email"
              id="same-as-email"
            />
            <label className="text-xs font-bold my-1" htmlFor="same-as-email">Same as email</label>
          </div>

          <div className="flex gap-2">
            <input
              onChange={inputHandler}
              checked={userData.pushNotifications === "no-push-notification"}
              type="radio"
              name="pushNotifications"
              value="no-push-notification"
              id="no-push-notification"
            />
            <label className="text-xs font-bold my-1" htmlFor="no-push-notification">no-push-notification</label>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-400 px-3 py-1 rounded my-3 hover:bg-blue-500 transition-all duration-200">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
