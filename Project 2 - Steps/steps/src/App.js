import { useState } from "react";

export default function App() {
  // Hooks are always defined at the top of the component
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  // function showBox(){
  //   if (isOpen){
  //     setIsOpen(false);
  //     // alert("closed")
  //   }
  //   else{
  //     setIsOpen(true);
  //     // alert("opened")
  //   }
  // }
  const messages = ["Learn React", "Make Projects", "Apply for Job"];

  return (
    <>
      <div
        style={{
          fontSize: "40px",
          textAlign: "right",
          marginRight: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(
            (isOpen) => {return !isOpen}
          );
        }}
      >
        X
      </div>

      {isOpen ? (
        <>
          <h1 style={{ textAlign: "center", marginTop: "5%" }}>
            How To Kill a Mocking Bird
          </h1>
          <div className="steps">
            <div className="numbers">
              <div className={`${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`${step >= 2 ? "active" : ""}`}>2</div>
              <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
