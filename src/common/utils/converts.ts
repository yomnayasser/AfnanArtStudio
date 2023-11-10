const capitalize = (string?: string) => {
  if (string) {
    return string[0]?.toUpperCase() + string?.slice(1).toLowerCase();
  }
};

const getNextDayDate = (dayName: string) => {
  const daysOfWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const targetDayOfWeek = daysOfWeek[dayName.toLowerCase()];

  let daysUntilNextDay = targetDayOfWeek - currentDayOfWeek;
  if (daysUntilNextDay <= 0) {
    daysUntilNextDay += 7; // Add 7 days to get the next occurrence
  }

  const nextDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilNextDay,
  );

  return `${nextDay.getDate()}/${nextDay.getMonth() + 1}`;
};

export {capitalize, getNextDayDate};
