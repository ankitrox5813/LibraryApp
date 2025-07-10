import { useState, useEffect } from "react";
import Select from "react-select";
import { getAllStudents } from "../apis/user-api";
import { getAllBooks } from "../apis/book-api";
import { addNewBookIssue } from "../apis/book-issue-api";
import { useNavigate, useLocation } from "react-router-dom";

const BookIssueForm = () => {
  const [bookIssue, setBookIssue] = useState({
    bookIsbn: "",
    issuedTo: "",
  });

  const [bookOptions, setBookOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getAllStudents().then((studentList) => {
      setStudentOptions(
        studentList.map((student) => {
          return {
            value: student._id,
            label: `${student.firstName} ${student.lastName}`,
          };
        })
      );
    });
    getAllBooks().then((bookList) => {
      setBookOptions(
        bookList.map((book) => {
          return {
            value: book.isbn,
            label: `${book.title} by ${book.author}`,
          };
        })
      );
    });
  }, []);

  const handleStudentSelectChange = (selectedOption) => {
    setBookIssue({ ...bookIssue, issuedTo: selectedOption.value });
  };

  const handleBookSelectChange = (selectedOption) => {
    setBookIssue({ ...bookIssue, bookIsbn: selectedOption.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookIssue.bookIsbn || !bookIssue.issuedTo) {
      alert("Please select a student and a book.");
      return; 
    }

    try {
      await addNewBookIssue(bookIssue);
      navigate("/");
    } catch (error) {
      console.error("Error adding book issue:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <section className="app-section">
      <h1>Issue a Book</h1>

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Student</label>
          <Select
            options={studentOptions}
            isSearchable={true}
            onChange={handleStudentSelectChange}
          />
        </div>

        <div className="field">
          <label>Book</label>
          <Select
            options={bookOptions}
            isSearchable={true}
            onChange={handleBookSelectChange}
            value={bookOptions.find(
              (option) => option.value === bookIssue.bookIsbn
            )}
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookIssueForm;
