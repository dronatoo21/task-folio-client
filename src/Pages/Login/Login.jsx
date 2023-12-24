import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { loginUser, googleLogin, FaceBookLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('');
        setSuccess('');

        loginUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccess('successfully logged in');
            toast("successfully logged in");
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            setLoginError(error.message);
        })
    };

    const handleGoogleSignIn = () => {
        setLoginError('');
        setSuccess('');
        googleLogin(googleProvider)
        .then(res => {
            console.log(res.user);
            setSuccess('successfully logged in');
            toast("successfully logged in");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            setLoginError(error.message);
        })
    }
    const handleFacebookSignIn = () => {
        setLoginError('');
        setSuccess('');
        FaceBookLogin(facebookProvider)
        .then(res => {
            console.log(res.user);
            setSuccess('successfully logged in');
            toast("successfully logged in");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            setLoginError(error.message);
        })
    }

    return (
        <div className="my-5">
          <h1 className="text-3xl font-semibold text-center">Please Login!</h1>
            <div className="hero my-10">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-neutral">Login</button>
                    </div>
                  </form>
                  <p className="text-center font-medium -mt-7 mb-1">or</p>
                  <button onClick={handleGoogleSignIn} className="btn btn-neutral mx-8 mb-5">Login With Google</button>
                  <p className="text-center font-medium -mt-4 mb-1">or</p>
                  <button onClick={handleFacebookSignIn} className="btn btn-neutral mx-8 mb-5">Login With Facebook</button>
                  {
                    loginError && <p className="text-red-700 px-8 pb-5">{loginError}</p>
                  }
                  {
                    success && <p className="text-green-500 px-8 pb-5">{success}</p>
                  }
                  <p className="px-8 pb-5">New here? Please <Link className="text-purple-700 font-bold" to="/registration">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;