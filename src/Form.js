import React from 'react'
import './App.css'

export default function Form() {
    return (
        <>
            <h2>Form Styling using JSX</h2>
            <form className="form">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" /><br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /><br /><br />
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" /><br /><br />
                    <input type="submit" className="button" value="Submit" />
            </form>
        </>
    );
}