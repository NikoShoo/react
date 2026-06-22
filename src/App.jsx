//import Audience from "./components/Audience/Audience";




import Audience from "./components/audience/audience";
import CTA from "./components/cta/cta";
import Expert from "./components/expert/expert";
import Hero from "./components/hero/hero";
import Problems from "./components/problems/problems";
import Process from "./components/process/process";
import Products from "./components/products/products";
import Results from "./components/results/results";
import Solution from "./components/solution/solution";

function App() {
  return (
    <>
    <Hero />
    <Problems />
    <Solution />
    <Process />
    <Audience />
    <Results />
    <Expert />
    <Products />
    <CTA />

      {/* <Hero />
      <Problems />
      <Solution />
      <Process />
      <Audience />
      <Results />
      <Expert />
      <Products />
      <CTA /> */}
    </>
  );
}

export default App;

