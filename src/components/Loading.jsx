const Loading = () => (
  <div className="loading">
    <svg
      width="250"
      height="250"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#646cff"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        strokeDasharray="31.4"
        strokeDashoffset="0">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="25"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="6"
        fontWeight="700"
        fill="#646cff">
        Loading…
      </text>
    </svg>
  </div>
);
export default Loading;
