import React from 'react';
import { useState } from 'react';
import '../css/style.css';
import { ref, set } from "firebase/database";
import db from "../components/database/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uid } from "uid";



function Form() {

    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [spin,setSpin]= useState("");
    const [button,setButton]=useState("Submit Details");
    

    //    Functions for form validation 

    //function to validate the name

    function nameValid() {
        console.log(name);
        if (name === null || name === "" ) {
            setNameError("Name can't be blank");
            return false;
        }else if(name.match(/^ *$/) !== null)
        {
            setNameError("Space not allowed");
        }
        else {

            setNameError("");
            return true;
        }
    }

    // function to validate Email

    function emailValid() {
        var atposition = mail.indexOf("@");
        var dotposition = mail.lastIndexOf(".");

        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= mail.length) {
            setEmailError("Please enter valid email");
            return false;
        }
        else {
            setEmailError("");
            return true;
        }
    }

    //function to validate number

    function numValid() {
        if (isNaN(phone)) {
            setPhoneError("Please Enter a valid number");
            return false;
        }
        else if (phone === "") {
            setPhoneError("Number field can't be blank");
            return false;
        }
        else {
            setPhoneError("");
            return true;
        }
    }
    // && emailValid() && numValid();
    function formValid() {
        return nameValid() && emailValid() && numValid();
    } 

    //function handle spin

  
    //handleOnClick button 
    let x="fa fa-circle-o-notch fa-spin";
    const handleOnClick = async () => {
       
        try {
            
            if (formValid()) {
                setButton("")
                setSpin(x)
                const uuid = uid();
                await set(ref(db, `/${uuid}`), {
                    name,
                    lname,
                    mail,
                    phone,
                });
                setName("");
                setLname("");
                setMail("");
                setPhone("");
                setSpin("");
                 toast.success("Details Saved!")
                setButton("Submit Details");
            }
            toast.dark("not saved")
        }
        catch (error) {
            console.log(error);
        }

    }




    //handleName onChange
    const handleName = (event) => {
        setName(event.target.value);
    }

    //handleLname onChange
    const handleLname = (event) => {
        setLname(event.target.value);
    }

    //handleMail onChange
    const handleMail = (event) => {
        setMail(event.target.value)
    }

    //handlePhone onChange
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    return (
        <>
            <h4 className='text-center display-4'>Reach Me</h4>
            <form className='center mx-3 my-3' name='myForm' >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter First Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={handleName}
                        aria-describedby="emailHelp" /><span style={{ color: "red" }}>{nameError}</span>

                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Last Name</label>
                    <input type="text" className="form-control" value={lname} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleLname}/>

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={mail} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleMail} /><span style={{ color: "red" }}>{emailError}</span>

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" value={phone} id="exampleInputPassword1" onChange={handlePhone} /><span style={{ color: "red" }}>{phoneError}</span>
                </div>
                <div>
                    <button type="submit" onClick={handleOnClick}
                        className="btn btn-dark btnn loader"><i class={spin}></i>{button}</button>
                </div>
            </form>
          <ToastContainer />
        </>
    );
}

export default Form;