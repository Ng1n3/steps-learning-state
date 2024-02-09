import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  //create state variable
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>

            {/* <p className="message">
              Step {step}: {messages[step - 1]}
            </p> */}

            <StepMesage step={step}>{messages[step - 1]}</StepMesage>

            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textcolor="#fff"
                onClick={handlePrevious}
              >
                <span>👈</span>Previous
              </Button>
              <Button bgColor="#7950f2" textcolor="#fff" onClick={handleNext}>
                <span>👉</span>Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StepMesage({ step, children }) {
  return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>

  );
}

function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
