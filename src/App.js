import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your Store Of Nifty NFTs. 
        Start Selling and Growing"
        description="Trade, Store NFTs, 
        Exchange and Earn Crypto. Join 25+ 
        million people using ReCoin marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a 
        buttery UI of ReCoin NFT marketplace. 
        Smooth constant colours of a fluent UI designs"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ReCoin is built using an innovative 
        technology which runs on all users' 
        devices - Android and IOS. You can easily 
        get your app into people hand"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Showcasing ReCoin NFT Marketplace"
        description="The App contains 
        two screens. The first Lists 
        all the NFTs while the second one shows
         the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center 
      bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with <FavoriteIcon style={{color:"red"}} /> 
          {" "}by {" "}
          <a href="https://twitter.com/PastorCoder" target="_blank" rel="noreferrer" >
          <span className="bold"><TwitterIcon style={{color:"blue"}} />PastorCoder</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
