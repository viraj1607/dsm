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


      <div className="form-container p-l-55 p-r-55 p-t-65 p-b-54">
        <form class="login100-form validate-form">

          <span className="login100-form-title p-b-49">Matrimonial Registration </span>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Email is reauired">
            <span className="label-input100">Email</span>
            <input className="input100" type="email" id="email" placeholder="Type your email"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>


          <div className="wrap-input100 validate-input m-b-23" data-validate="FullName is reauired">
            <span className="label-input100">Full Name</span>
            <input className="input100" type="text" id="fullName" placeholder="Type your FullName"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100-wb validate-input m-b-23" data-validate="Gender is reauired">
            <span className="label-input100">Gender</span>
            <input type="radio" id="male" name="gender" value="Male"/>
            <label className="txt1" htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female"/>
            <label className="txt1" htmlFor="female">Female</label>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="BirthDate is reauired">
            <span className="label-input100">BirthDate</span>
            <input className="input100" type="date" id="birthDate" placeholder="birthDate"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="BirthTime is reauired">
            <span className="label-input100">Birth Time</span>
            <input className="input100" type="time" id="birthTime" placeholder="birthTime"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="BirthPlace is reauired">
            <span className="label-input100">Birth Place</span>
            <input className="input100" type="text" id="birthPlace" placeholder="Enter Birth Place"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Height is reauired">
            <span className="label-input100">Height</span>
            <input className="input100" type="text" id="height" placeholder="Enter Height"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>


          <div className="wrap-input100 validate-input m-b-23" data-validate="Weight is reauired">
            <span className="label-input100">Weight</span>
            <input className="input100" type="text" id="weight" placeholder="Enter weight"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Interests is reauired">
            <span className="label-input100">Interests</span>
            <input className="input100" type="text" id="interests"
                   placeholder="Enter interests(like Music, Cooking..)"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>


          <div className="wrap-input100-wb validate-input m-b-23" data-validate="Current Marital Status is reauired">
            <span className="label-input100">Current Marital Status</span>
            <input type="radio" id="neverMarried" name="currentMaritalStatus" value="Never Married"/>
            <label className="txt1" htmlFor="neverMarried">Never Married</label>
            <input type="radio" id="divorced" name="currentMaritalStatus" value="Divorced"/>
            <label className="txt1" htmlFor="divorced">Divorced</label>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Current Address Of Candidate is reauired">
            <span className="label-input100">Current Address Of Candidate</span>
            <input className="input100" type="text" id="currentAddressOfCandidate"
                   placeholder="Enter Candidate's current address"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Current Address Of Family is reauired">
            <span className="label-input100">Current Address Of Family</span>
            <input className="input100" type="text" id="currentAddressOfFamily"
                   placeholder="Enter Family's current address"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23" data-validate="Contact Number is reauired">
            <span className="label-input100">Contact Number</span>
            <input className="input100" type="text" id="contactNumber"
                   placeholder="Enter Contact Number"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100-wb validate-input m-b-23" data-validate="Immigration Status Of Candidate is reauired">
            <span className="label-input100">Immigration Status Of Candidate</span>
            <input type="radio" id="studentVisa" name="immigrationStatusOfCandidate" value="Student Visa"/>
            <label className="txt1" htmlFor="studentVisa">Student Visa</label>
            <input type="radio" id="workVisa" name="immigrationStatusOfCandidate" value="Work Visa"/>
            <label className="txt1" htmlFor="workVisa">Work Visa</label>
            <input type="radio" id="permanentResident" name="immigrationStatusOfCandidate"
                   value="Permanent Resident"/>
            <label className="txt1" htmlFor="permanentResident">Permanent Resident</label>
            <input type="radio" id="Citizen" name="immigrationStatusOfCandidate" value="Citizen"/>
            <label className="txt1" htmlFor="Citizen">Citizen</label>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Highest Education Of Candidate is reauired">
            <span className="label-input100">Candidate's Highest Education</span>
            <input className="input100" type="text" id="highestEducationOfCandidate"
                   placeholder="Enter Highest Education Of Candidate"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Highest Education Of Candidate is reauired">
            <span className="label-input100">Candidate's Professional Details</span>
            <input className="input100" type="text" id="professionalDetailsOfCandidate"
                   placeholder="Enter Professional Details Of Candidate"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Father FullName is reauired">
            <span className="label-input100">Father FullName</span>
            <input className="input100" type="text" id="fatherFullName"
                   placeholder="Enter FullName Of Father"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Father's Contact Number is reauired">
            <span className="label-input100">Father Contact Number</span>
            <input className="input100" type="text" id="fatherContactNumber"
                   placeholder="Enter Father's Contact Number"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Mother FullName is reauired">
            <span className="label-input100">Mother FullName</span>
            <input className="input100" type="text" id="motherFullName"
                   placeholder="Enter FullName Of Mother"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Father's Native Town is reauired">
            <span className="label-input100">Father Native Town</span>
            <input className="input100" type="text" id="fatherNativeTown"
                   placeholder="Enter NativeTown Of Father"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Mother's Native Town is reauired">
            <span className="label-input100">Mother Native Town</span>
            <input className="input100" type="text" id="motherNativeTown"
                   placeholder="Enter NativeTown Of Mother"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Details Of Siblings is reauired">
            <span className="label-input100">Details Of Siblings</span>
            <input className="input100" type="text" id="detailsOfSiblings"
                   placeholder="Enter Details Of Siblings"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Maternal Uncle Name is reauired">
            <span className="label-input100">Maternal Uncle Name</span>
            <input className="input100" type="text" id="maternalUncleName"
                   placeholder="Enter Maternal UncleName"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>


          <div className="wrap-input100 validate-input m-b-23"
               data-validate="Details Of Mosal is reauired">
            <span className="label-input100">Details Of Mosal</span>
            <input className="input100" type="text" id="detailsOfMosal"
                   placeholder="Enter Details Of Mosal"/>
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>


          <div className="wrap-input100-wb validate-input m-b-23" data-validate="Believe In Kundli is reauired">
            <span className="label-input100">Believe In Kundli</span>
              <input type="radio" id="html" name="believeInKundli" value="Yes"/>
              <label className="txt1" htmlFor="Yes">Yes</label>
              <input type="radio" id="css" name="believeInKundli" value="No"/>
              <label className="txt1" htmlFor="No">No</label>
            </div>


            <div className="wrap-input100 validate-input m-b-23"
                 data-validate="Expectation from LifePartner is reauired">
              <span className="label-input100">Expectation From Life Partner</span>
              <input className="input100" type="text" id="expectationFromLifePartner"
                     placeholder="Enter Expectation From Life Partner"/>
              <span className="focus-input100" data-symbol="&#xf206;"></span>
            </div>

            <div className="input-div">
              <label>I do hereby acknowledge that all the details provided above is correct and I willfully wish to
                share my details in above form.</label><br/>
              <input type="radio" id="yes" name="correctInformation" value="Yes"/>
              <label className="txt1" htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="correctInformation" value="No"/>
              <label className="txt1" htmlFor="no">No</label>
            </div>

            <button onClick={(e) => submitForm(e)}>Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
);
};

export default Form;
