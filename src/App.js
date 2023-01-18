import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

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
        description="Experience a buttery UI of ReCoin NFT marketplace. 
        Smooth constant colours of a fluent UI designs"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />


      <SectionWrapper
        title="Deployment"
        description="ReCoin is built using an innovative 
        technology which runs on all users' 
        devices - Android and IOS. You can easily get your app into people hand"
        mockupImg={assets.feature}
        reverse
      />
      
      <SectionWrapper
        title="Showcasing ReCoin NFT Marketplace"
        description="The App contains two screens. The first Lists 
        all the NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
    </>
  );
};

export default App;
