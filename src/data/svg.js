export const Star = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={fill ? "#199892" : "none"}
      stroke={fill ? "#199892" : "#CFCFCF"}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-star"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
    </svg>
  );
};

export const Cart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shopping-bag"
      viewBox="0 0 24 24"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"></path>
    </svg>
  );
};

export function Truck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-truck"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h2M15 18H9M19 18h2a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0017.52 8H14"></path>
      <circle cx="17" cy="18" r="2"></circle>
      <circle cx="7" cy="18" r="2"></circle>
    </svg>
  );
}

export function Clover() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-clover"
      viewBox="0 0 24 24"
    >
      <path d="M16.17 7.83L2 22M4.02 12a2.827 2.827 0 113.81-4.17A2.827 2.827 0 1112 4.02a2.827 2.827 0 114.17 3.81A2.827 2.827 0 1119.98 12a2.827 2.827 0 11-3.81 4.17A2.827 2.827 0 1112 19.98a2.827 2.827 0 11-4.17-3.81A1 1 0 114 12M7.83 7.83l8.34 8.34"></path>
    </svg>
  );
}

export function XLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 512 462.799"
      width={"100%"}
      height={"100%"}
    >
      <path
        fillRule="nonzero"
        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
      ></path>
    </svg>
  );
}

export function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-github"
      viewBox="0 0 24 24"
    >
      <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}
