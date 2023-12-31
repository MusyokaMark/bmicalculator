import React, { useState } from 'react';
import Accordion from './components/Accordion';

const Home = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [showResult, setShowResult] = useState(false);
  const [bmiResult, setBMIResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      height,
      weight,
      age,
      gender,
    };
    //bmi calculation
    const { bmiValue, category } = calculateBMI();
    setBMIResult(bmiValue);
    setBmiCategory(category);
    setShowResult(true);
    console.log(formData);
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let bmiCategory = '';
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    return { bmiValue: bmi, category: bmiCategory };
  };

  const closeResult = () => {
    setHeight("");
    setWeight("");
    setShowResult(false);
  };
  return (
    <>
      <div className='text-blue-600 text-center font-bold text-5xl mt-6'>BMI CALCULATOR</div>
      <div>
        <p className='ml-6 mt-7 mr-6 text-center cursor-pointer text-sm'>BMI stands for Body Mass Index. It is a numerical value derived from a person's weight and height and is commonly used to categorize individuals into different weight status categories. BMI is a simple and widely used tool to estimate whether a person has a healthy body weight for their height.</p>
      </div>
      {/* <div className='mt-6 ml-6 w-[50%'><Accordion /></div> */}
      <div className="w-full max-w-md mx-auto mt-7">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height (in cm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              required
              placeholder="Enter Height"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight (in kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Enter Weight"
              required
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="w-full"
              type="range"
              id="age"
              min="0"
              max="100"
              value={age}
              onChange={handleAgeChange}
            />
            <p className="text-gray-700 text-center mt-2">{age} years</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <div className="flex">
              <label className="block mr-4">
                <input
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                Male
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>

          </div>
          <div className="flex items-center justify-center mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Calculate BMI
            </button>
          </div>
        </form>

        {/* Pop-up result */}
        {showResult && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <p className="text-center text-xl font-semibold mb-4">
                Your BMI is: {bmiResult}
                <br />
                Category: {bmiCategory}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeResult}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* social media  */}
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-center text-2xl font-bold'>Follow for More </h1>
        <p className='text-center'>&copy; 2023 Musyoka. All Rights Reserved.</p>
      </div>
    </>

  );
};

export default Home