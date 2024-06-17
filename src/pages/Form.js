import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const Form = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log(name, email, phone);

    try {
        console.log("in try")
      await addDoc(collection(db, "employees"), {
        name: name,
        email: email,
        phone: phone,
      });
      console.log("Document successfully written!");

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <form>
          <div className="input-div">
            <label>Name:</label>
            <input id="name" />
          </div>
          <div className="input-div">
            <label>Email:</label>
            <input id="email" />
          </div>
          <div className="input-div">
            <label>Phone No:</label>
            <input id="phone" />
          </div>
          <button onClick={(e) => submitForm(e)}>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
