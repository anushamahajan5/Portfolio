"use client";

import { FormEvent, useState } from "react";

const responses: Record<string, string> = {
  help: "Try: skills, focus, contact, or clear",
  skills: "Java / Spring Boot / Kafka / Vert.x / SQL / Python",
  focus: "Low-latency services, ETL pipelines, and risk platforms.",
  contact: "anusha.mahajan.ece21@itbhu.ac.in",
};

export default function TerminalWidget() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("Type help to explore Anusha's work.");

  const runCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedCommand = command.trim().toLowerCase();
    if (normalizedCommand === "clear") {
      setOutput("");
    } else {
      setOutput(responses[normalizedCommand] ?? `Command not found: ${normalizedCommand || "..."}`);
    }
    setCommand("");
  };

  return (
    <div className="terminal-widget" aria-label="Interactive profile terminal">
      <div className="terminal-bar"><span /><span /><span /><b>anusha@systems:~</b></div>
      <div className="terminal-output"><span className="terminal-prompt">$</span> {output}</div>
      <form onSubmit={runCommand} className="terminal-form">
        <label htmlFor="terminal-command" className="sr-only">Enter a command</label>
        <span className="terminal-prompt">$</span>
        <input
          id="terminal-command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          placeholder="help"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
