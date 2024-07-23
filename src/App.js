import React, { useState, useEffect } from "react";
import './App.css';
import ContactCards from "./ContactCard";

const App = () => {
    // const contacts = [
    //     {
    //         avatarUrl:"https://placehold.co/150",
    //         name: "Harry Potter",
    //         email:"Hp@hp.com",
    //         age: 34
    //     },
    //     {
    //         avatarUrl:"https://placehold.co/150",
    //         name: "Hormonie Gringer",
    //         email:"Hrmging@hp.com",
    //         age: 31
    //     },
    //     {
    //         avatarUrl:"https://placehold.co/150",
    //         name: "Neviel longbottom",
    //         email:"nvlbtm@hp.com",
    //         age: 28
    //     },
    //     {
    //         avatarUrl:"https://placehold.co/150",
    //         name: "Severus Snape",
    //         email:"sevsnape@hp.com",
    //         age: 45
    //     }
    // ]

    const [results,setResults] = useState([]);
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setResults(data.results)
        })
    }, [])
    
    return(
        <>
        {results.map((result, index) => {
            return(
            <ContactCards key={index}
                avatarUrl = {result.picture.large}
                name = {result.name.first} 
                email= {result.email}
                age= {result.dob.age}
            />)
        })}
        </>
    )
}

export default App;