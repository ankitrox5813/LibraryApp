import { Link } from "react-router-dom";

const LibrarianHomeScreen = () => {
    return (
    <>
    <h1>Welcome Librarian</h1>
    
    <div className="ui cards">
        <div className="card">
            <div className="content">
                <div className="header"><Link to={"/add-book"}> Add new book </Link></div>
                <div className="description">
                    Adds a new book to library.
                </div>
            </div>
         </div>

         <div className="card">
            <div className="content">
                <div className="header"><Link to={"/books"}> Books in Library </Link></div>
                <div className="description">
                    See all the books present in Library.
                </div>
            </div>
         </div>

         <div className="card">
            <div className="content">
                <div className="header"><Link to={"/book-issue"}> Issue Book </Link></div>
                <div className="description">
                    Issue books to the student.
                </div>
            </div>
         </div>

         <div className="card">
            <div className="content">
                <div className="header"><Link to={"/book-issue-list"}> Show Issued Book </Link></div>
                <div className="description">
                    See Issued Books.
                </div>
            </div>
         </div>

    </div>
    
</>
    );
};

export default LibrarianHomeScreen;