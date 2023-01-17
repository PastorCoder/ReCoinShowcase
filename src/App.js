import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import "../styles/override-global.css";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your Store Of Nifty NFTs. Start Selling and Growing"
        description="Trade, Store NFTs, Exchange and Earn Crypto. Join 25+ 
        million people using ReCoin marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ReCoin NFT marketplace. Smooth constant colours of a fluent UI designs"
        
        mockupImg={assets.homeCards}
       reverse
      />
    </>
  );
};

export default App;
