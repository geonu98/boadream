import { useState } from "react";
import { processSteps } from "../../data/siteContent";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(processSteps[0].id);
  const currentStep = processSteps.find((step) => step.id === activeStep) ?? processSteps[0];

  return (
    <section className="section section-steps" id="steps">
      <div className="container">
        <div className="section-title-wrap section-title-left reveal-up">
          <p className="pre-title">(How it works)</p>
          <h2 className="section-title">
            The smarter way to take <span>control of your health</span>
          </h2>
        </div>

        <div className="step-shell reveal-up">
          <div className="step-tabs" role="tablist" aria-label="How it works">
            {processSteps.map((step) => (
              <button
                key={step.id}
                className={`step-tab${step.id === activeStep ? " is-active" : ""}`}
                type="button"
                onClick={() => setActiveStep(step.id)}
              >
                {step.label}
              </button>
            ))}
          </div>

          <div className="step-panels">
            <div className="step-panel is-active">
              <div className="step-copy">
                <p>{currentStep.copy}</p>
                <ul>
                  {currentStep.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="step-tags">
                  {currentStep.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="step-visual">
                <img src={currentStep.image} alt={currentStep.alt} />
                {currentStep.cardTitle ? (
                  <div className="glass-mini-card">
                    <h3>{currentStep.cardTitle}</h3>
                    <span>{currentStep.cardText}</span>
                    <button type="button">{currentStep.cardAction}</button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
