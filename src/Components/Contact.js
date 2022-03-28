import React from 'react';
import ReactDOM from 'react-dom';
import "../App.js"
import "../Styles/forum.css";
export default function Contact(){
	return (
		<div className="Home">
		<h1>Contact us!</h1>
		   <div class="forum">
        <form>
            <label for="Username"> Username </label><br/>
            <input type ="text" id="user"/><br/>
            <label for="Email">Email </label><br/>
            <input type ="text" id="email"/><br/>
            <label for="Password"> Password</label><br/>
            <input type ="text" id="pass"/><br/>
            <input type="submit" className="submit"/><br/>
        </form>
         </div>
		</div>
		)



}