import React from "react";
import img from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import "./Contain.css";

function Contain() {
  return (
    <div>
      <div className="container">
        <img src={img} alt="" />
        <div className="text-block">
          <div>
            <h1>
              Unlocking the future of <br></br> NFTS MaintStream
            </h1>
            <br />
            <h2>
              Build and Eitherem , binance smart chain <br /> and polkadot
            </h2>
          </div>
        </div>
      </div>
      <div className="container-2">
        <img src={img2} alt="" />
        <div className="text-to">
          <h1>FEATURES</h1>

          <div className="outer">
            <div className="inner">
              <h2>Fandraise</h2>
              <br />
              <h3>
                Raise funds for your NFT Project and <br /> fully multichain
                launchpad
              </h3>
            </div>

            <div className="inner">
              <h2>NF's Lend</h2>
              <br />
              <h3>
                Seamiessly issue and avail loans in NFT based <br /> fungible
                crypto tokens with our NFT landing protocol
              </h3>
            </div>

            <div className="inner">
              <h2>Collectible Store</h2>
              <br />
              <h3>
                Trade Highly - authentcated NFTs with exclusive <br /> edition
                tokens our collection store
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={img3} alt="" />
        <div className="text-block">
          <div className="last">
            <h1>ECOSYSTEM</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contain;
