# mymoviz-backend
## Presentation
MyMoviz is a website that allows you to display the latest released movies with the ability to create a wishlist, add a view counter, and rate each of the presented movies.
You can have a complete preview of the application by using this link:
```
https://mymoviz-frontend-git-main-paloma-aubeaus-projects.vercel.app/
```
![MyMovizScreenshot](https://github.com/PalomaAubeau/mymoviz-backend/assets/154338327/4fd7e968-f490-4020-b873-208cab997f8f)

## Features
Latest Releases Display: View recently released movies with their posters, summaries, and evaluation.\
Add Preferences: Rate each of the presented movies and visualize the number oif times you have seen the movie.

## Technologies Used
### Frontend:
CSS, JavaScript
Framework: React.js

### Backend:
Node.js
Express.js

### API:
The Movie Database (TMDb) to fetch movie information


## Installation
### Prerequisites
Node.js and npm (or yarn) should be installed on your machine.

### Installation Steps
Create a folder with two separated folders into it: one for the backend part, and the other one for the frontend part.
### 1. Clone repositories into  separated folders:

BACKEND:
```
https://github.com/PalomaAubeau/mymoviz-backend.git
```
FRONTEND:
```
https://github.com/PalomaAubeau/mymoviz-frontend.git
```
Open two terminals to retrieve the backend and frontend parts in parallel.
### 2. Install dependencies for both frontend and backend:

```
cd backend
npm (or yarn) install
```
```
cd ../frontend
npm (or yarn) install
```

### 3. Configure environment variables:
Create a .env file in the backend folder.
Add your required keys and configurations.
Example:
```
MYMOVIZ_API_KEYS=your_api_key
```
### 4. Start the application:
Backend (you can use npm or yarn):
```
cd backend
yarn start
```
Frontend (you can use npm or yarn):
```
cd frontend
yarn dev
```

## Acknowledgements
Thanks to The Movie Database (TMDb) for their API that provides movie information.
