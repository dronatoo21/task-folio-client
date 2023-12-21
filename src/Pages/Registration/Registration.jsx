import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checked = e.target.checkbox.checked;
        const photoUrl = e.target.photourl.value; 
        console.log(name, email, password);
        setRegisterError('');
        setSuccess('');
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
          setRegisterError('Please write a valid email!');
          return;
        }else if(password.length < 6) {
            setRegisterError('Password must be at least 6 characters')
            return ;
        }else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
          return setRegisterError('Password must contain at least one special character')
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Your password must have at least 1 upper case letter');
            return;
        }  else if(!checked){
            setRegisterError('Please accept our terms and conditions');
            return;
        }      
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccess('Successfully Registered')
            toast("successfully Registered");
            navigate(location?.state ? location.state : '/')
            updateProfile(res.user, {
              displayName: name,
              photoURL: photoUrl
            })
            .then(()=> {
              window.location.reload()
            })
            .catch(error=> console.error(error.message))
        })
        .catch(error => {
            setRegisterError(error.message);
        });
    }
    return (
        <div className="my-5">
           <h1 className="text-3xl font-semibold text-center">Please Register!</h1>
            <div className="hero my-10">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo Url</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photourl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" id="terms" />
                        <label  className="ml-3" htmlFor="terms">Accept our <a className="text-purple-700 font-medium" href="#">terms and conditions!</a></label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-neutral">Register</button>
                    </div>
                  </form>
                  {
                    registerError && <p className="text-red-700 px-8 pb-5">{registerError}</p>
                  }
                  {
                    success && <p className="text-green-500 px-8 pb-5">{success}</p>
                  }
                  <p className="px-8 pb-5">Already have an account? <Link className="text-purple-700 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;