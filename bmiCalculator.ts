import  {default as BmiCategories}  from './bmiCategories.json';
 
export class BmiCalculator {
  private _bimiCateogies;

  constructor(){
    this._bimiCateogies = BmiCategories;
  }

  get bmiCategories() {
    return this._bimiCateogies;
  }

  calculate = (obj)=> {
    let bmi = parseFloat((obj.WeightKg / (obj.HeightCm/100)).toFixed(2));
    obj['bmi'] = bmi;
    for(let dataRange in this._bimiCateogies) {
        let dataRangeValues = dataRange.split('-');
        if(bmi >= parseFloat(dataRangeValues[0]) && bmi <= parseFloat(dataRangeValues[1])) {
            obj['bmiCategory'] = this._bimiCateogies[dataRange].observation;
            obj['healthRisk'] = this._bimiCateogies[dataRange].impact;
        }
    }
    return obj;
  }
}
