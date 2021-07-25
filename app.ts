import express from 'express';
import {BmiCalculator} from './bmiCalculator';
import  {default as UserData}  from './users.json';

const app = express();
const port = 3000;

const bmiObj = new BmiCalculator();
console.log(bmiObj.bmiCategories);

UserData.forEach((eachUserObj) => {
    console.log(bmiObj.calculate(eachUserObj));
});

app.get('/', (req, res) => {
    res.send('Application running successfully...');
});
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});