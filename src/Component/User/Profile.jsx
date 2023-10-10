import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container mx-auto mt-10">
            <img src={user.photoURL} alt="User Profile Image"></img>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>

        </div>
    );
};

export default Profile;