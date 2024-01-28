import React, { useState } from 'react';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDob(event.target.value);
  };

  const handleCalculateAge = (): void => {
    setAge(calculateAge(dob));
  };

  return (
    <div>
      <label>
        Enter Date of Birth:
        <input type="date" value={dob} onChange={handleDateChange} />
      </label>
      <button onClick={handleCalculateAge}>Calculate Age</button>
      {age !== null && <p>Age: {age}</p>}
    </div>
  );
};

export default AgeCalculator;
