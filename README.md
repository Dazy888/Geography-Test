This is a Geography test made by David Hutsenko

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.