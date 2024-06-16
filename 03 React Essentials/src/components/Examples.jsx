import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";
import { useState } from "react";

function Examples() {
  const [textContent, setTextContent] = useState();

  function handleSelect(selectElement) {
    setTextContent(selectElement);
  }

  let tabContent = <strong>Select topic</strong>;

  if (textContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[textContent].title}</h3>
        <p>{EXAMPLES[textContent].description}</p>
        <pre>
          <code>{EXAMPLES[textContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={textContent === "components"}
              onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={textContent === "jsx"} onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={textContent === "props"} onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isSelected={textContent === "state"} onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
