# React-Vitae

React-Vitae is a React template for generating interactive resumes. Its name is a wordplay on "React" and "Curriculum Vitae" (resume), which accurately represents its purpose. With React-Vitae, you can easily create a stunning resume that showcases your skills and experience in an interactive way.

## Features

1. Responsive design that looks great on all devices
2. Support for adding social media links, including LinkedIn, Twitter, GitHub, etc.
3. Ability to showcase open-source projects with descriptions, and links.
4. Fontawesome Icons


## Usage

All the data required by the application is stored in the `src/data/` directory. You can add your information to the relevant files in this directory. Once you have entered your details, running the application will generate a resume that looks like this:

<img src="https://user-images.githubusercontent.com/36154121/229708136-0790f98e-f803-4c04-a3e4-c99ca539ca95.png" alt="resume" width="200">



### Development

Running the application locally is simple. Follow these steps:

1. Install dependencies using `npm install`
2. Start the development server using `npm run dev`
3. Once the server is up, visit `https://localhost:5173` in your browser (check stdout to find the port number)

### Hosting/Deployment

React-Vitae comes with a Docker configuration that builds the application and hosts it using an Nginx container. Follow these steps to run the application using Docker:

1. Build the Docker image using `docker-compose build`
2. Start the container using `docker-compose up`
3. Once the container is up, visit `https://localhost:4000` in your browser

That's it! With React-Vitae, creating an impressive resume is now easier than ever.
