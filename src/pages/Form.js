import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const Form = () => {
  const submitForm = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthDate = document.getElementById("birthDate").value;
    const birthTime = document.getElementById("birthTime").value;
    const birthPlace = document.getElementById("birthPlace").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const interests = document.getElementById("interests").value;
    const currentMaritalStatus = document.querySelector('input[name="currentMaritalStatus"]:checked').value;
    const currentAddressOfCandidate = document.getElementById("currentAddressOfCandidate").value;
    const currentAddressOfFamily = document.getElementById("currentAddressOfFamily").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const immigrationStatusOfCandidate = document.querySelector('input[name="immigrationStatusOfCandidate"]:checked').value;
    const highestEducationOfCandidate = document.getElementById("highestEducationOfCandidate").value;
    const professionalDetailsOfCandidate = document.getElementById("professionalDetailsOfCandidate").value;
    const fatherFullName = document.getElementById("fatherFullName").value;
    const fatherContactNumber = document.getElementById("fatherContactNumber").value;
    const motherFullName = document.getElementById("motherFullName").value;
    const fatherNativeTown = document.getElementById("fatherNativeTown").value;
    const motherNativeTown = document.getElementById("motherNativeTown").value;
    const detailsOfSiblings = document.getElementById("detailsOfSiblings").value;
    const maternalUncleName = document.getElementById("maternalUncleName").value;
    const detailsOfMosal = document.getElementById("detailsOfMosal").value;
    const believeInKundli = document.querySelector('input[name="believeInKundli"]:checked').value;
    const expectationFromLifePartner = document.getElementById("expectationFromLifePartner").value;
    const correctInformation = document.querySelector('input[name="correctInformation"]:checked').value;

    console.log(email, fullName, gender, birthDate, birthTime, birthPlace, height, weight, interests, currentMaritalStatus, currentAddressOfCandidate, currentAddressOfFamily, contactNumber, immigrationStatusOfCandidate, highestEducationOfCandidate, professionalDetailsOfCandidate, fatherFullName, fatherContactNumber, motherFullName, fatherNativeTown, motherNativeTown, detailsOfSiblings, maternalUncleName, detailsOfMosal, believeInKundli, expectationFromLifePartner, correctInformation);

    try {
        console.log("in try")
      await addDoc(collection(db, "matrimonial_registration"), {
        email : email,
        fullName : fullName,
        gender : gender,
        birthDate : birthDate,
        birthTime : birthTime,
        birthPlace : birthPlace,
        height : height,
        weight : weight,
        interests : interests,
        currentMaritalStatus : currentMaritalStatus,
        currentAddressOfCandidate : currentAddressOfCandidate,
        currentAddressOfFamily : currentAddressOfFamily,
        contactNumber : contactNumber,
        immigrationStatusOfCandidate : immigrationStatusOfCandidate,
        highestEducationOfCandidate : highestEducationOfCandidate,
        professionalDetailsOfCandidate : professionalDetailsOfCandidate,
        fatherFullName : fatherFullName,
        fatherContactNumber : fatherContactNumber,
        motherFullName : motherFullName,
        fatherNativeTown : fatherNativeTown,
        motherNativeTown : motherNativeTown,
        detailsOfSiblings : detailsOfSiblings,
        maternalUncleName : maternalUncleName,
        detailsOfMosal : detailsOfMosal,
        believeInKundli : believeInKundli,
        expectationFromLifePartner : expectationFromLifePartner,
        correctInformation : correctInformation,
      });
      console.log("Document successfully written!");

      document.getElementById("email").value = "";
      document.getElementById("fullName").value = "";
      document.getElementById("gender").value = "";
      document.getElementById("birthDate").value = "";
      document.getElementById("birthTime").value = "";
      document.getElementById("birthPlace").value = "";
      document.getElementById("height").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("interests").value = "";
      document.getElementById("currentMaritalStatus").value = "";
      document.getElementById("currentAddressOfCandidate").value = "";
      document.getElementById("currentAddressOfFamily").value = "";
      document.getElementById("contactNumber").value = "";
      document.getElementById("immigrationStatusOfCandidate").value = "";
      document.getElementById("highestEducationOfCandidate").value = "";
      document.getElementById("professionalDetailsOfCandidate").value = "";
      document.getElementById("fatherFullName").value = "";
      document.getElementById("fatherContactNumber").value = "";
      document.getElementById("motherFullName").value = "";
      document.getElementById("fatherNativeTown").value = "";
      document.getElementById("motherNativeTown").value = "";
      document.getElementById("detailsOfSiblings").value = "";
      document.getElementById("maternalUncleName").value = "";
      document.getElementById("detailsOfMosal").value = "";
      document.getElementById("believeInKundli").value = "";
      document.getElementById("expectationFromLifePartner").value = "";
      document.getElementById("correctInformation").value = "";
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
            <label>Email:</label>
            <input type="email" id="email"/>
          </div>
          <div className="input-div">
            <label>FullName:</label>
            <input type="text" id="fullName"/>
          </div>
          <div className="input-div">
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="Male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female"/>
            <label htmlFor="female">Female</label>
          </div>
          <div className="input-div">
            <label>Birth Date:</label>
            <input type="date" id="birthDate"/>
          </div>
          <div className="input-div">
            <label>Birth Time:</label>
            <input type="time" id="birthTime"/>
          </div>
          <div className="input-div">
            <label>Birth Place:</label>
            <input type="text" id="birthPlace"/>
          </div>
          <div className="input-div">
            <label>Height:</label>
            <input type="text" id="height"/>
          </div>
          <div className="input-div">
            <label>Weight:</label>
            <input type="text" id="weight"/>
          </div>
          <div className="input-div">
            <label>Interests:</label>
            <input type="text" id="interests"/>
          </div>
          <div className="input-div">
            <label>Current Marital Status:</label>
            <input type="radio" id="neverMarried" name="currentMaritalStatus" value="Never Married"/>
            <label htmlFor="neverMarried">Never Married</label>
            <input type="radio" id="divorced" name="currentMaritalStatus" value="Divorced"/>
            <label htmlFor="divorced">Divorced</label>
          </div>
          <div className="input-div">
            <label>Current Address Of Candidate:</label>
            <textarea id="currentAddressOfCandidate"/>
          </div>
          <div className="input-div">
            <label>Current Address Of Family:</label>
            <textarea id="currentAddressOfFamily"/>
          </div>
          <div className="input-div">
            <label>Contact Number:</label>
            <input type="text" id="contactNumber"/>
          </div>
          <div className="input-div">
            <label>Immigration Status Of Candidate:</label>
            <input type="radio" id="studentVisa" name="immigrationStatusOfCandidate" value="Student Visa"/>
            <label htmlFor="studentVisa">Student Visa</label>
            <input type="radio" id="workVisa" name="immigrationStatusOfCandidate" value="Work Visa"/>
            <label htmlFor="workVisa">Work Visa</label>
            <input type="radio" id="permanentResident" name="immigrationStatusOfCandidate" value="Permanent Resident"/>
            <label htmlFor="permanentResident">Permanent Resident</label>
            <input type="radio" id="Citizen" name="immigrationStatusOfCandidate" value="Citizen"/>
            <label htmlFor="Citizen">Citizen</label>
          </div>
          <div className="input-div">
            <label>Highest Education Of Candidate:</label>
            <input type="text" id="highestEducationOfCandidate"/>
          </div>
          <div className="input-div">
            <label>Professional Details Of Candidate:</label>
            <input type="text" id="professionalDetailsOfCandidate"/>
          </div>
          <div className="input-div">
            <label>Father Full Name:</label>
            <input type="text" id="fatherFullName"/>
          </div>
          <div className="input-div">
            <label>Father Contact Number:</label>
            <input type="text" id="fatherContactNumber"/>
          </div>
          <div className="input-div">
            <label>Mother Full Name:</label>
            <input type="text" id="motherFullName"/>
          </div>
          <div className="input-div">
            <label>Father Native Town:</label>
            <input type="text" id="fatherNativeTown"/>
          </div>
          <div className="input-div">
            <label>Mother Native Town:</label>
            <input type="text" id="motherNativeTown"/>
          </div>
          <div className="input-div">
            <label>Details Of Siblings:</label>
            <input type="text" id="detailsOfSiblings"/>
          </div>
          <div className="input-div">
            <label>Maternal Uncle Name:</label>
            <input type="text" id="maternalUncleName"/>
          </div>
          <div className="input-div">
            <label>Details Of Mosal:</label>
            <input type="text" id="detailsOfMosal"/>
          </div>
          <div className="input-div">
            <label>Believe In Kundli:</label>
            <input type="radio" id="html" name="believeInKundli" value="Yes"/>
            <label htmlFor="Yes">Yes</label>
            <input type="radio" id="css" name="believeInKundli" value="No"/>
            <label htmlFor="No">No</label>
          </div>
          <div className="input-div">
            <label>Expectation From Life Partner:</label>
            <textarea id="expectationFromLifePartner"/>
          </div>
          <div className="input-div">
            <label>I do hereby acknowledge that all the details provided above is correct and I willfully wish to
              share my details in above form.</label><br/>
            <input type="radio" id="yes" name="correctInformation" value="Yes"/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="correctInformation" value="No"/>
            <label htmlFor="no">No</label>
          </div>

          <button onClick={(e) => submitForm(e)}>Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Form;
