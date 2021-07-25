"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bmiCalculator_1 = require("./bmiCalculator");
const users_json_1 = __importDefault(require("./users.json"));
const app = express_1.default();
const port = 3000;
const bmiObj = new bmiCalculator_1.BmiCalculator();
console.log(bmiObj.bmiCategories);
users_json_1.default.forEach((eachUserObj) => {
    console.log(bmiObj.calculate(eachUserObj));
});
app.get('/', (req, res) => {
    res.send('Application running successfully...');
});
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map