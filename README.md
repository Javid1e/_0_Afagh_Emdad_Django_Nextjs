# Afagh Road Assistance

Afagh Road Assistance is a full-stack web application built with Django REST Framework and Next.js, utilizing Next UI, Tailwind CSS, Axios, Docker, and NGINX. This application aims to provide road assistance services to users. Below is a comprehensive guide to set up, configure, and run the application.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To install and run Afagh Road Assistance locally, follow these steps:

1. Clone this repository to your local machine:

    `git clone <repository-url>`

2. Navigate into the project directory:

    `cd Afagh_Road_Assistance`

3. Install dependencies for both Django and Next.js:

    `cd backend`

    `pip install -r requirements.txt`

    `cd ../frontend`

     `yarn install` 


## Usage

Before running the application, ensure you have set up the required environment variables. Refer to the `.env.example` files in both the `backend` and `frontend` directories.

To start the Django server, run the following command in the `backend` directory:

    python manage.py runserver


To start the Next.js development server, run the following command in the `frontend` directory:

    npm run dev


Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- Django REST Framework
- Next.js
- Nextui Library
- Tailwind CSS Framework
- Axios
- Docker
- NGINX
- MariaDB
- React
- Python
- JavaScript
- HTML
- CSS

## Contributing

Contributions are welcome! If you'd like to contribute to Afagh Road Assistance, please fork the repository and create a pull request with your changes. Ensure to follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).
