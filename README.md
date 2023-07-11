## Geography Test project
**Author:** Davyd Hutsenko

## Getting Started

1: Go to the project's folder

```bash
cd geography-test
```

2:

1) For view - pull docker image   

```bash
docker pull dazy/geography-test:latest
```

2) For development - install all dependencies

```bash
npm install
# or
yarn
```

3:

1) For view - run docker container

```bash
docker run -d -p 3000:3000 --rm --name geography-test dazy/geography-test
```

2) For development - run dev server

```bash
npm run dev
# or
yarn dev
```

4) Open [http://localhost:3000](http://localhost:3000) in your browser and use.

## Description

School Geography Test is a comprehensive web application designed to assist students in improving their geography knowledge. This project, developed using Next.js, TypeScript, SCSS, and Redux-Toolkit, offers a single test that covers a wide range of geography topics.

Key Features:

* Geography Test: Take a challenging test that includes questions on countries, capitals, landmarks, and other geography-related topics.
* Score Calculation: Get instant feedback on your performance with a calculated score based on your answers.
* Correct Answer Review: Review the correct answers and explanations for any questions you answered incorrectly, helping you learn from your mistakes.
* User-Friendly Interface: Navigate the application with ease through its intuitive and user-friendly interface.
* Responsive Design: Access the test from various devices, ensuring a seamless experience across desktops, tablets, and mobile devices.
* Whether you are preparing for a school geography exam or simply interested in expanding your knowledge of the world, School Geography Test provides a convenient platform to assess and enhance your geography skills. Start the test now and embark on a journey of discovery!
