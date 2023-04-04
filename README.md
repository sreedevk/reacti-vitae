# React-Vitae

`Reacti-Vitae` is a word play on `React + Curriculum Vitae` (Resumé) and just like the name says. This is a react template for generating interactive résumés. 

## Usage

All of the data required by the applications is stored in `src/data/`. Once you have entered the information, in the relevant files, running the application would generate a resume that looks likes this:


### Development

Running the application locally is simple.

```bash
npm install
npm run dev
```

once the development server is up, visit `https://localhost:5173` (check stdout to find port number)

### Hosting/Deployment

Reacti-Vitae comes with a docker configuration that builds the application and hosts it using an nginx container. In order to run the application using docker. follow these steps:

```bash
docker-compose build
docker-compose up
```

now visit `https://localhost:4000`.
