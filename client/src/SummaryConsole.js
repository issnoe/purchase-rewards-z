import React from "react";

function SummaryConsole(props) {
  return (
    <section
      style={{
        marginLeft: "5rem",
      }}
    >
      <h2>Summary</h2>
      <textarea
        readOnly={true}
        disabled={true}
        rows={100}
        minLength={2000}
        value={props.summary}
        style={{ minHeight: "10vh", minWidth: "100%" }}
      ></textarea>
    </section>
  );
}

export default SummaryConsole;
