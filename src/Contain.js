import React from "react";
import img from "./assets/feature.png";
import binance from "./assets/binance.png";
import eth from "./assets/eth.png";
import pol from "./assets/polkadot.png";
import tem from "./assets/temcol.jpg";
import nft from "./assets/Pathdesg.svg";
import the from "./assets/thr-d.png";
import "./Contain.css";

function Contain() {
  const mystyle = {
    width: "85%",
    height: "100px",
  };
  const mystyle2 = {
    width: "85%",
    height: "auto",
  };
  return (
    <div>
      <div className="container">
        <img src={img} alt="" />
        <div className="text-block">
          <div>
            <h1>Unlocking the future of NFTs mainStream</h1>
            <br />
            <h2>
              Build and eitherem , binance smart chain <br /> and polkadot
            </h2>
          </div>

          <div className="cube-sin">
            <div className="bin">
              <img src={binance} alt="" />
            </div>
            <div className="eth">
              <img src={eth} alt="" />
            </div>
            <div className="pol">
              <img src={pol} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <img src={tem} className="templ" alt="" />
        <img src={nft} style={mystyle} className="temp3" alt="" />
        <img src={the} style={mystyle2} className="temp2" alt="" />
        <div className="text-to">
          <h1>FEATURES</h1>
        </div>
        <div className="float-container">
          <div className="float-child">
            <div className="">
              <h2>Fundraise</h2>
              Raise funds for your NFT project through a fully equipped <br />
              multi-chain lanch pad
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>NFTs lend</h2>
              Semlessly issue and avail in NFT- baked fungible <br /> crypto
              tokens with and NFT Colladteralized lending protocol
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>NFTs Yield</h2>
              Earn a passive income from your NFT portfolio through NFT- baked
              jungible token Yield farming
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>Collectible Store</h2>
              Trade highly- authenticated NFT with exclusive limited edtion
              token on our collectibles store
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <img src={img3} alt="" />
        <div className="text-block">
          <div className="last">
            <h1>ECOSYSTEM</h1>
          </div>
        </div>
      </div>  */}
    </div>
  );
}

export default Contain;
