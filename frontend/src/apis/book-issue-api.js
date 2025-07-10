import LibraryApplicationBackend from "./LibraryApplicationBackend";

export const addNewBookIssue = async (bookIssue) => {
    const {data} = await LibraryApplicationBackend.post("/book-issue/add", {
        ...bookIssue,
    });
    return data;
};

export const getBooksIssueList = async (status = "ISSUED") => {
    const {data: booksIssueList } =  await LibraryApplicationBackend.get(
        "/book-issue/list",
        {
            params: {status},
        }
    );
    return booksIssueList;
}