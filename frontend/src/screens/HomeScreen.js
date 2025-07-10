import { useEffect, useState } from "react";
import { getLocalStorageUser, logoutUser } from "../utils/AuthUtil";
import LibrarianHomeScreen from "./LibrarianHomeScreen"; 
import StudentHomeScreen from "./StudentHomeScreen";
import { useNavigate } from "react-router-dom";



const HomeScreen = () => {
    const [userType, setUserType] = useState("");
    
    useEffect(() => {
        const user = getLocalStorageUser(); 
        if (user) {
            setUserType(user.type);
        }
    }, []);

    const navigate = useNavigate();

    // if(!userType.length) {
    //     console.log(userType);
    //     return <p>Loading...</p>;
    // }

    const getHomeScreen = () => {
        return userType === "LIBRARIAN" ? (
            <LibrarianHomeScreen />
        ) : (
            <StudentHomeScreen />
        );
    };

    return (
        <section className="app-section">
        <button className="ui secondary button" 
        onClick={async () => {
            await logoutUser();
            navigate("/login");
        }}
        >
            Logout
        </button>
        {getHomeScreen()} 
        </section>
    );
};

export default HomeScreen;