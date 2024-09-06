import "./style.css";

const SemiCircularProgressBar = ({
  value = 5,
  maxValue = 10,
  label = "Label",
  filledColor = "#26F631",
  emptyColor = "#FFFFFF80",
}) => {
  // Calculate the radius
  const radius = 20; // Adjust the radius for size
  const circumference = Math.PI * radius; // Half circumference since it's a semi-circle

  // Calculate the stroke-dashoffset based on the percentage
  const offset = circumference - (value / maxValue) * circumference;

  return (
    <div className="relative w-fit flex justify-center items-center">
      <svg width="48" height="24" viewBox="0 0 48 24">
        {/* Background Half Circle */}
        <path
          d={`M 4 24 A ${radius} ${radius} 0 0 1 44 24`}
          fill="transparent"
          stroke={emptyColor} // Light gray stroke for background
          strokeWidth="3"
        />
        {/* Progress Half Circle */}
        <path
          d={`M 4 24 A ${radius} ${radius} 0 0 1 44 24`}
          fill="transparent"
          stroke={filledColor} // Green stroke for progress
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Text */}
      <div className="absolute top-3 text-center gap-0">
        <div className="text-sm font-semibold text-white">{value}%</div>
        <div className="text-[8px] text-title">{label}</div>
      </div>
    </div>
  );
};
export default SemiCircularProgressBar;
