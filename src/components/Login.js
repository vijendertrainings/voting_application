import {useState} from "react";

const Login=({})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleLogin = async () => {
        try {
            console.log(`Inside the handleLogin function. Username=${username} and password = ${password}`);
            const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            const authToken = data.accessToken; // Assuming token is returned as 'token' in the response
            setToken(authToken);
            console.log("User authenticated successfully.Setting the token.")
            // Save token to localStorage or sessionStorage
            localStorage.setItem('token', authToken);
            setShowConfirmation(true);
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };


    return (
        <>
            {showConfirmation ? (
                //showing the message after validation
                <div className="rounded-lg mb-2 p-2 bg-white shadow-lg">
                        <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login is successful. Thank you.</h2>
                            </div>
                        </div>
                    </div>
            ) :<div className="rounded-lg mb-2 p-2 bg-white shadow-lg">
                        <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" action="#" method="POST" onSubmit={(e) => {
                                    e.preventDefault();
                                    handleLogin();
                                }}>
                                <div>
                                    <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                    <div className="mt-2">
                                        <input id="username" name="username" type="username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </input>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                    </div>
                                    <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </input>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?
                                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                                </p>
                            </div>
                        </div>
                    </div>
                }
        </>
    );


}

export default Login;