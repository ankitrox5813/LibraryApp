require("./appmongoose");
const express=require("express");
const cors=require("cors");
const userRoute=require("./routes/user-route");
const bookRoute=require("./routes/book-route");
const bookIssueRoute = require("./routes/book-issue-route");
const app=express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/book", bookRoute);
app.use("/book-issue", bookIssueRoute);

app.listen(8080,() =>{
    console.log('Library is running on port 8080');
});
