import { BmiCalculator } from '../bmiCalculator';
import { expect } from  'chai';
import { default as UserData } from '../users.json';
const feetValue = 30.48;
const failedCase = false; // setting value TRUE/FALSE will switch on/off the intentional failure

describe('bmiCalculator', () => {
    it('initialized bmi calculator testing process', () => {
        let bmiObj =new BmiCalculator();
        expect(bmiObj.bmiCategories).to.be.an('object');
    });

    
    for(let index in UserData) {
        let userObj = UserData[index];
        it(`calculating BMI for the user with following details: Gender: ${userObj.Gender}, Height: ${(userObj.HeightCm/feetValue).toFixed(2)} Ft, Weight: ${userObj.WeightKg} KG`, () => {
            let bmiObj =new BmiCalculator();
            let bmi = parseFloat((userObj.WeightKg / (userObj.HeightCm/100)).toFixed(2));
            expect(bmiObj.calculate(userObj).bmi).to.equals(bmi);
        });
    }

    if(failedCase) {
        it('trying to failing the code intensionally. passing BMI value as 0 by  default', () => {
            let bmiObj =new BmiCalculator();
            let bmi = 0;
            let userObj = UserData[0];
            expect(bmiObj.calculate(userObj).bmi).to.equals(bmi);
        });
    }

});
