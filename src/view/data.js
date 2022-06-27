import React, { useState,useEffect } from "react";
import { onValue, ref, remove, set } from "firebase/database";
import db from "../components/database/firebase";


 function Data() {
    const [datas,setDatas]=useState([]);
    
    


     //read from the database
     try
     {
     useEffect(() => {
         onValue(ref(db), (snapshot) => {
             setDatas([]);
            
             const data = snapshot.val();
             if (data !== null) {
                 Object.values(data).map((name) => {
                     setDatas((oldArray) => [name, ...oldArray]);                     
                 });
             }
         });
     }, []);
    }
    catch(error)
    { 
        console.log("error is"+error)
    }

    //function id increment

   
    return (

        <>
        
            <table class="table table-dark table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                    </tr>
                </thead>
               
                <tbody>
                {datas.map((name)=> (
                   
                    <tr>
                        <th scope="row">1</th>
                        
                        <td>{name.name}</td>
                        <td>{name.lname}</td>
                        <td>{name.mail}</td>
                        <td>{name.phone}</td>
                    </tr>
                    ))}
                    </tbody>
                    </table>
        </>
    );
}
export default Data;

