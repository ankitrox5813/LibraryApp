import { Link } from "react-router-dom";

const StudentHomeScreen = () => {
    return (
        <>
        <h1>Welcome Student</h1>
        
        <div className="ui cards">
            
             <div className="card">
                <div className="content">
                    <div className="header"><Link to={"/books"}> Books in Library </Link></div>
                    <div className="description">
                        See all the books present in Library.
                    </div>
                </div>
             </div>
        </div>
        
    </>
        );
};

export default StudentHomeScreen;