import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={textContent === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={textContent === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={textContent === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={textContent === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
