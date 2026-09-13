"use client";

import { useState } from "react";

const stages = [
  { label: "Sources", detail: "Reference feeds and regulatory datasets enter through validated ingestion boundaries." },
  { label: "ETL + Services", detail: "Java and Spring Boot services transform, enrich, and expose dependable domain data." },
  { label: "Kafka Pub/Sub", detail: "Low-latency topics distribute changes while observer patterns keep consumers decoupled." },
  { label: "Trading Systems", detail: "Five-plus downstream gates and OMS workflows receive consistent, actionable data." },
];

export default function ArchitectureDiagram() {
  const [activeStage, setActiveStage] = useState(1);
  const selectedStage = stages[activeStage];

  return (
    <div className="architecture-panel">
      <div className="architecture-heading">
        <div>
          <p className="eyebrow">SYSTEM CASE STUDY</p>
          <h3>Reference data, designed for motion</h3>
        </div>
        <span className="status-pill"><i /> Live model</span>
      </div>
      <div className="architecture-diagram" role="list" aria-label="Reference data system flow">
        {stages.map((stage, index) => (
          <div className="architecture-stage-wrap" key={stage.label}>
            <button
              type="button"
              role="listitem"
              className={`architecture-stage ${activeStage === index ? "is-active" : ""}`}
              onClick={() => setActiveStage(index)}
              aria-pressed={activeStage === index}
            >
              <span className="stage-index">0{index + 1}</span>
              <strong>{stage.label}</strong>
            </button>
            {index < stages.length - 1 && <span className="architecture-arrow" aria-hidden>→</span>}
          </div>
        ))}
      </div>
      <div className="architecture-detail" key={selectedStage.label}>
        <span>{selectedStage.label}</span>
        <p>{selectedStage.detail}</p>
      </div>
    </div>
  );
}
