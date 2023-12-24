import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-14 mb-2">My Profile</h1>
            <div className="card p-10 m-5 bg-base-100 shadow-xl">
            <div className="flex ml-5 mt-5 items-center gap-3">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <img className="rounded-full" src={user?.photoURL} alt="img" />
                    </label>  
                    <div>
                        <p className="font-bold">{user?.displayName}</p>
                    </div>
            </div>
                <p className="ml-5 mt-3"><span className="font-semibold">E-mail:</span> {user?.email}</p>
            </div>
        </div>
    );
};

export default UserProfile;