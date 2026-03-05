import { useEffect } from "react";

const Toggle = ({ toggle }) => {
  useEffect(() => {
    console.log("mounted");

    return () => console.log("unmounted");
  }, []);

  return <div>toggle is {toggle.toString()}</div>;
};

export default Toggle;
