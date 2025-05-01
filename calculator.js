exports.calculateNeeds = ({ age, height, weight, gender, activity }) => {
    const bmr = gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  
    const activityMultiplier = {
      sedentary: 1.2,
      moderate: 1.55,
      active: 1.75,
    }[activity];
  
    const calories = bmr * activityMultiplier;
    return {
      calories: Math.round(calories),
      protein: Math.round((calories * 0.3) / 4),
      carbs: Math.round((calories * 0.5) / 4),
      fat: Math.round((calories * 0.2) / 9),
    };
  };
  