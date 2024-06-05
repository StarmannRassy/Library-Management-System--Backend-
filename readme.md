Library Management SystemAPI

Description

The Library Management SystemAPI is a backendsystemdesignedtofacilitate
the management of a library's resources and services through web-based
applications. It provides a set of endpoints that allowusers to performvarious
operations related to managing books, users, and borrowing/returning books.
This project will allowyou to apply the skills you've learned throughout the
bootcamptoadifferent domain.

Features:

1. User Management:
   a. User registrationandauthentication.
   b. Differentiate betweenlibrarianandregular user roles.
2. Book Management:
   a. Addnewbookstothe library.
   b. Updateexistingbookdetails (e.g., title, author, genre, quantity).
   c. Remove booksfromthe library.
3. Searchand Filtering:
   a. Searchfor books bytitle, author, or genre.
   b. Filter books by availability (e.g., availablefor borrowing).
4. Bonus: Borrowingand Returning Books:
   a. Users canborrowbooksfromthe library.
   b. Users canreturnbookstothe library.

Acceptance Criteria:

1. Functional API:
   a. The API should allowusers to performCRUDoperationsfor books
   andmanage user accounts securely.
2. User Management:
   a. Users canregister for anaccount andloginsecurely.
   b. Different roles (librarian and regular user) should have appropriate
   permissions.
3. Book Management:
   a. Users can add newbooks, updateexistingbookdetails, andremove
   booksfromthe library.
4. Searchand Filtering:
   a. Users cansearchfor books bytitle, author, or genre.
   b. Users canﬁlter books by availabilityfor borrowing.
5. Bonus: Borrowingand Returning Books:
   a. Users canborrowbooksfromthe library if available.
   b. Users canreturnbookstothe library.
   User Stories:
6. As a user, I want to be able to register for an account sothat I canaccess
   the library's services.
7. As a user, I want to be able to log in securely with my registered
   credentials.
8. As a user, I want to beabletosearchfor books bytitle, author, or genreto
   ﬁndspeciﬁc books of interest.
9. As a user, I want to be able to ﬁlter books by availability to see which
   books arecurrently availablefor borrowing.
10. Bonus: As a user, I want to be able to borrowbooks fromthe library if
    they areavailable.
11. Bonus: As a user, I want to be able to return books to the library after
    borrowingthem.
12. As a librarian, I want to be able to add new books to the library's
    collection.
13. As a librarian, I want to be able to update existing book details (such as
    title, author, genre, and quantity) to keep the library's inventory up to
    date.
14. As a librarian, I want to be able to remove books fromthe library if
    necessary.
    Additional Requirements:
    ● Linters and formatters should be set up to ensure code consistency and
    quality.
    ● Code must be hostedonGithubor Gitlabandwell documented.
    ● Using a project management tool (e.g., Trello, Asana, Pivotal tracker) to
    organizetasks andtrack progress is recommended.
    Have fun building your Library Management SystemAPI and best of luck
    withyour project defense!

# Installation Procedures...
# Library Management System - Backend

## Getting Started

Welcome to the Library Management System backend project! Follow the steps below to set up and run the project in your local development environment.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local instance or connection to a cloud database)
- [Git](https://git-scm.com/) (optional, for version control)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/StarmannRassy/Library-Management-System--Backend-.git
    cd library-management-system-backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root of the project and add the following variables:

    ```env
    NODE_ENV=development
    PORT=8000
    DATABASE=mongodb+srv://<username>:<password>@cluster0.mongodb.net/library?retryWrites=true&w=majority
    DATABASE_LOCAL=mongodb://localhost:27017/LibraryManagement
    DATABASE_PASSWORD=yourpassword
    JWT_SECRET=yourjwtsecret
    JWT_EXPIRES_IN=90d
    ```

    Replace `<username>`, `<password>`, and other placeholders with your actual values.

4. **Run the MongoDB server** (if using a local instance):

    Open a new terminal window and run:
    ## Starting MongoDB Server

Before running the MongoDB server (`mongod`), ensure that the MongoDB binaries are in your system's PATH environment variable. If you haven't added MongoDB to your PATH, you'll need to navigate to the MongoDB installation directory in the terminal.

### Navigate to MongoDB Installation Directory

Use the `cd` command to navigate to the directory where MongoDB is installed. This might vary depending on your operating system and installation method. For example, on Windows, the default installation directory might be `C:\Program Files\MongoDB\Server\{version}\bin`.

```bash
cd C:\Program Files\MongoDB\Server\{version}\bin


    ```bash
    mongod
    ```

## CommonJS (CJS) Module System

This project uses the CommonJS (CJS) module system, which is the default module system for Node.js. Below is a brief explanation of CommonJS and how it differs from ES Modules (ESM).

### Key Features of CommonJS

1. **`require` function**:
   - Used to import modules.
   - Syntax: `const module = require('module');`

2. **`module.exports` and `exports`**:
   - Used to export modules.
   - You can export a single item (object, function, etc.) using `module.exports`.
   - You can also use `exports` as an alias for `module.exports`.

### Example

#### Creating a Module

**utils/math.js**:
```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};

