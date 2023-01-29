/**
 * BMI Calculator
 */

export const BmiStatus = {
	Underweight: 0,
	HealthyWeight: 1,
	Overweight: 2,
	Obesity: 3,
};

export const WeightUnits = {
	KG: 0, // kilograms
	G: 1, // grams
	Pound: 2, // lbs
};

export const HeightUnits = {
	CM: 0, // centimeter
	M: 1, // meter
	In: 2, // inch
	Ft: 3, // feet
};

export interface BmiInput {
	weight: number;
	weightUnit: number;
	height: number;
	heightUnit: number;
}

export interface BmiOutput {
	bmi: number;
	status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
	// TODO: implement me
	let { weight, height } = input;
	const { weightUnit, heightUnit } = input;
	switch (weightUnit) {
		case 0:
			break;
		case 1:
			weight = weight / 1000;
			break;
		case 2:
			weight = weight * 0.45359237;
			break;
	}
	switch (heightUnit) {
		case 0:
			height = height / 100;
			break;
		case 1:
			break;
		case 2:
			height = (height * 2.45) / 100;
			break;
		case 3:
			height = (height * 30.48) / 100;
			break;
	}
	const bmiValue = Math.round(weight / height ** 2);

	if (bmiValue < 18.5) {
		const BmiStatus = 0;
	} else {
		const BmiStatus = 1;
	}

	return { status: 0, bmi: bmiValue };
}
