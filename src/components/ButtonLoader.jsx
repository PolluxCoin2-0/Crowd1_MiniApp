import { useState } from "react";
import HashLoader from "react-spinners/HashLoader"; // Import the loader
import styled from "@emotion/styled"; // Import `styled` from Emotion

// Create a styled wrapper around the HashLoader
const StyledLoader = styled(HashLoader)`
  display: block;
  margin: 0 auto;
  border-color: red; // Apply custom styles here
`;

const ButtonLoader = () => {
  const [loading] = useState(true); // `loading` is always true in this case

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
        backgroundColor: "#000000",
      }}
    >
      <StyledLoader
        size={80}
        color="#539D43"
        loading={loading}
      />
    </div>
  );
};

export default ButtonLoader;
