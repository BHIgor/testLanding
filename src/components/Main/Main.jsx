import { About } from "./About/About";
import { ArrBlocks } from "./ArrBlocks/ArrBlocks";
import { Experience } from "./Experience/Experience";

export const Main = () => {

  return <>
    <main className="main">
      <ArrBlocks/>
      <About/>
      <Experience/>
    
    </main>
  </>;
}