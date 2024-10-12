# News API Application

This web application fetches top headlines from the News API and displays them to users. The application features a Node.js backend that handles API requests and a React frontend that displays the news articles.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Documentation](#api-documentation)


## Features
- Fetches the latest news headlines from the US.
- Caches responses for one hour to reduce API calls.
- Displays articles with titles, sources, and publication dates.


## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express, NewsAPI, Node-Cache
- **Database**: None (API-based)
- **Development Tools**: npm, cors


## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Clone the repository
git clone https://github.com/ameya-kanchan/News-API.git

### Backend Setup
1. Navigate to the backend directory:
   cd "News API/backend"
2. Install the required packages:
    npm install
    node server.js
3. Verify the Server is Running:
    Server is running on port 5000

### Frontend Setup
1. Navigate to the frontend directory:
    cd "News API/news-frontend"
2. Install Required Packages:
    npm install
3. Start the Frontend Application:
    npm start

### Additional Notes
1. Ensure your backend server is running on http://localhost:5000 before starting the frontend application.
2. If you make any changes to the frontend code, the application should automatically reload in your browser. If not, you can refresh the page manually.


## Usage
Once both the backend and frontend servers are running, you can visit the frontend application in your browser. The application will fetch and display the top headlines from the US.


## API Documentation
### Endpoint
1. Fetches the top headlines from the US.
    Endpoint: GET /api/news
    Response:
    {
        "articles": [{
            "title": "Article Title",
            "source": { "name": "Source Name" },
            "publishedAt": "2024-10-07T16:37:13Z"
         }
        // More articles...
        ]
    }











