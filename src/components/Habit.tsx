interface HabitProps {
  completed: number;
}

function Habit({ completed }: HabitProps) {
  return <div className="bg-zing-900 w-10">{completed}</div>;
}

export default Habit;
