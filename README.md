# 🔍 Job Finder 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 	![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


### Description
**Job Finder** is your go-to platform for discovering career opportunities and managing job postings with ease. Whether you're a job seeker browsing listings or a recruiter looking to connect with top talent, **Job Finder** provides a seamless, intuitive experience. With responsive design, secure authentication, and quick job filtering options, finding the perfect match has never been easier.

## ✨ Features

- **Public Access**: Anyone can browse job details without needing to log in or register.
- **Recruiter Role**: Recruiters can register or log in to add, view, and manage job listings.
- **Responsive Design**: The application is fully responsive. On larger screens, jobs are displayed in a horizontal card layout, while on smaller devices, they appear in a compact card format.
- **Job Details & Editing**: 
  - Public users can only view job details.
  - Recruiters can view and edit job details, but only the original recruiter who posted the job can edit it.
- **Job Filtering**: Filter jobs by skills and title on the job dashboard.
- **Secure Authentication**: The application uses JWT and bcrypt for secure authentication and authorization.
- **User-Friendly UI**: The "Add New Job" form includes tool-tips and auto-suggestions to make the process quick and easy.
- **Notifications**: Real-time toast notifications are provided using the `react-hot-toast` library.

## 🛠️ Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MongoDB, with Mongoose for data querying
- **Styling**: Tailwind CSS
- **Authentication & Security**: JWT and bcrypt
- **Notifications**: React-hot-toast

## 🌐 Visuals
**To open in a Browser:**  Use https://frontend-job-listing.vercel.app/ to open up the job finder app onto your browser window.

![Visual1](https://github.com/user-attachments/assets/74ecd4a9-d7af-46c5-914e-fa198a499682)
#
![Visual2](https://github.com/user-attachments/assets/fb082787-b337-44b5-baf4-940091d61ac2)
#
![Visual3](https://github.com/user-attachments/assets/d148dbae-3825-4e78-a33b-13a49ae72e35)


## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Frontend & Backend Repositories

This project is split into two separate repositories for the frontend and backend. You can find them here:

- **Frontend Repository**: [https://github.com/skshm-verma/Frontend-Job-Listing.git](#)
- **Backend Repository**: [https://github.com/skshm-verma/Job-Listing-Api.git](#)

### Installation

1. **Clone the Frontend Repository:**

    ```bash
    git clone <Frontend_Repo_Link>
    cd frontend
    npm install
    ```

2. **Clone the Backend Repository:**

    ```bash
    git clone <Backend_Repo_Link>
    cd backend
    npm install
    ```

3. **Environment Variables:**

    Set up your `.env` file in the backend directory with the following:

    ```bash
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    ```

4. **Running the Application:**

    - **Frontend**: 
        ```bash
        cd frontend
        npm start
        ```
    - **Backend**: 
        ```bash
        cd backend
        npm start
        ```

    The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Contributing

Contributions are welcome! Feel free to open a pull request or submit an issue if you encounter any problems or have suggestions for improvement.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


