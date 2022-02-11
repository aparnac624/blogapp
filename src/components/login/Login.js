import "./Login.css";

export default function Login() {
  return (
     <>
        <div class="body"></div>
		<div class="grad"></div>
		<div class="header">
			<div>LOGIN</div>
		</div>
		<br></br>
		<div class="login">
				<input type="text" placeholder="username" name="user"></input><br></br>
				<input type="password" placeholder="password" name="password"></input><br></br>
				<input type="button" value="Login"></input>
		</div>
    </>
            
    
  )

}