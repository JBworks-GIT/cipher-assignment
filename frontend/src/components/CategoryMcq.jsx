import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; // Only import axios if you're using it somewhere
import { useSelector } from "react-redux";

function CategoryMcq() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedType, setSelectedType] = useState("");
  const { isAuthorized } = useSelector((e) => e.auth);
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [!isAuthorized, navigate]);

  const mcqTypes = ["Mix Type", "DBMS", "OS", "oops", "networking"];

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    navigate(`/fundamentalmcq?type=${type}`);
  };

  const renderMcqPage = () => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");

    if (type) {
      return <Fundamentalmcq mcqType={type} />;
    }

    return null;
  };

  return (
    <>
      <h2>Select MCQ Type</h2>
      <div>
        {mcqTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeSelection(type)}
            style={{
              backgroundColor: selectedType === type ? "#007bff" : "#f8f9fa",
              color: selectedType === type ? "white" : "black",
              padding: "10px 20px",
              margin: "5px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedType && <p>Selected Type: {selectedType}</p>}
      {renderMcqPage()}
    </>
  );
}

export default CategoryMcq;
