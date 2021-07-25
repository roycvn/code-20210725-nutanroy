"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmiCalculator = void 0;
const bmiCategories_json_1 = __importDefault(require("./bmiCategories.json"));
class BmiCalculator {
    constructor() {
        this.calculate = (obj) => {
            let bmi = parseFloat((obj.WeightKg / (obj.HeightCm / 100)).toFixed(2));
            obj['bmi'] = bmi;
            for (let dataRange in this._bimiCateogies) {
                let dataRangeValues = dataRange.split('-');
                if (bmi >= parseFloat(dataRangeValues[0]) && bmi <= parseFloat(dataRangeValues[1])) {
                    obj['bmiCategory'] = this._bimiCateogies[dataRange].observation;
                    obj['healthRisk'] = this._bimiCateogies[dataRange].impact;
                }
            }
            return obj;
        };
        this._bimiCateogies = bmiCategories_json_1.default;
    }
    get bmiCategories() {
        return this._bimiCateogies;
    }
}
exports.BmiCalculator = BmiCalculator;
//# sourceMappingURL=bmiCalculator.js.map