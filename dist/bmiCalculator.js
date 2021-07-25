"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmiCalculator = void 0;
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
        this._bimiCateogies = {
            "0 - 18.4": { observation: "Underweight", impact: "Malnutrition risk" },
            "18.5 - 24.9": { observation: "Normal weight", impact: "Low risk" },
            "25 - 29.9": { observation: "Overweight", impact: "Enhanced risk" },
            "30 - 34.9": { observation: "Moderately obese", impact: "Medium risk" },
            "35 - 39.9": { observation: "Severely obese", impact: "High risk" },
            "40 - 100": { observation: "Very severely obese", impact: "Very high risk" },
        };
    }
    get bmiCategories() {
        return this._bimiCateogies;
    }
}
exports.BmiCalculator = BmiCalculator;
//# sourceMappingURL=bmiCalculator.js.map