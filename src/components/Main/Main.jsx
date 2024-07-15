import { About } from "./About/About";
import { ArrBlocks } from "./ArrBlocks/ArrBlocks";
import { Experience } from "./Experience/Experience";
import { Why } from "./Why/Why";
import { Career } from "./Сareer/Career";

export const Main = () => {

  return <>
    <main className="main">
      <ArrBlocks/>
      <About/>
      <Why/>
      <Experience/>
      <Career/>
    </main>
  </>;
}