import express, { Application } from 'express';

const app: Application = express();
const port: Number = 9000;

app.listen(port, () => console.log(`Server run on port ${port}`));
