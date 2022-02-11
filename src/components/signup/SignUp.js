import "./SignUp.css";

export default function Signup() {
  return (
     <>
        <div class="body"></div>
		<div class="grad"></div>
		<div class="header">
			<div>SIGNUP</div>
		</div>
		<br></br>
		<div class="login">
				<input type="text" placeholder="username" name="user"></input><br></br>
				<input type="password" placeholder="password" name="password"></input><br></br>
				<input type="password" placeholder="confirm password" name="password"></input><br></br>
				<input type="button" value="Login">SIGNUP</input>
		</div>
    </>
            
    
  )

}