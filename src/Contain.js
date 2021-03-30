import React from "react";
import img from "./assets/feature.png";
import binance from "./assets/binance.png";
import eth from "./assets/eth.png";
import pol from "./assets/polkadot.png";
import tem from "./assets/temcol.jpg";
import nft from "./assets/Pathdesg.svg";
import the from "./assets/thr-d.png";
import light from "./assets/temp-light.png";
import launch from "./assets/launch.png";
import protocol from "./assets/protocol.png";
import market from "./assets/market.png";
import incubation from "./assets/incubation.png";

import green from "./assets/green.png";
import red from "./assets/red.png";
import mix from "./assets/mix.png";
import sky from "./assets/sky.png";
import last from "./assets/last.jpg"
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
  // const eco = {
  //   width:"100%",
  //   height:"500px"
  // }
  const style_launch = {
    width: "100%",
    height: "auto",
  };

  const style_green = {
    width: "8%",
    height: "auto",
    float: "left",
    top: "20%",
    left: "110px",
    position: "absolute",
  };
  
  const red_style = {
    width: "8%",
    height: "auto",
    
    top: "45%",
    float: "right",
    left: "95%",
    position: "absolute",
  }

  const green_style = {
    width: "8%",
    height: "auto",
    
    top: "70%",
    float: "right",
    left: "-50px",
    position: "absolute",
  }
  
const mix_style = {
  width: "8%",
    height: "auto",
    
    top: "95%",
    float: "right",
    left: "80%",
    position: "absolute",
}

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
              <p>
                Raise funds for your NFT project through a fully equipped <br />
                multi-chain lanch pad
              </p>
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>NFTs lend</h2>
              <p>
                Semlessly issue and avail in NFT- baked fungible <br /> crypto
                tokens with and NFT Colladteralized lending protocol
              </p>
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>NFTs Yield</h2>
              <p>
                {" "}
                Earn a passive income from your NFT portfolio through NFT- baked
                jungible token Yield farming
              </p>
            </div>
          </div>

          <div className="float-child">
            <div className="">
              <h2>Collectible Store</h2>
              <p>
                Trade highly- authenticated NFT with exclusive limited edtion
                token on our collectibles store
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="economy">
        <img src={light} alt="" />

        <div className="text-for">
          <h1>ECOSYSTEM</h1>
        </div>
        <div className="float-eco">
          <div className="float-child-eco">
            <div className="">
              <h2>Gate launchpad</h2>
              <p>
                NFT gate empowers the crypto community and upcoming <br />
                high-potential NFT project through completely decentralized{" "}
                <br />
                token auction. <br />
                NFT Gate community can take GATE tokens <br /> to participate in
                a varaiety of whitelisting , seed functing , <br />
                and private sales campaign and support there favorite NFT
                projects
              </p>
            </div>
          </div>

          <div className="float-child-eco">
            <img src={launch} style={style_launch} alt="" />
          </div>

          <img src={sky} style={style_green} alt="" />

          <div className="float-child-eco">
            <img src={protocol} style={style_launch} alt="" />
          </div>

          <div className="float-child-eco">
            <div className="">
              <h2>Gate launchpad</h2>
              <p>
                NFT gate empowers the crypto community and upcoming <br />
                high-potential NFT project through completely decentralized{" "}
                <br />
                token auction. <br />
                NFT Gate community can take GATE tokens <br /> to participate in
                a varaiety of whitelisting , seed functing , <br />
                and private sales campaign and support there favorite NFT
                projects
              </p>
            </div>
            <img src={red} style={red_style} alt="" />
          </div>

          

          <div className="float-child-eco">
            <div className="">
              <h2>Gate launchpad</h2>
              <p>
                NFT gate empowers the crypto community and upcoming <br />
                high-potential NFT project through completely decentralized{" "}
                <br />
                token auction. <br />
                NFT Gate community can take GATE tokens <br /> to participate in
                a varaiety of whitelisting , seed functing , <br />
                and private sales campaign and support there favorite NFT
                projects
              </p>
            </div>
          </div>

          <div className="float-child-eco">
            <img src={market} style={style_launch} alt="" />
          </div>

          <img src={green} alt="" style={green_style}/>

          <div className="float-child-eco">
            <img src={incubation} style={style_launch} alt="" />
          </div>

          <div className="float-child-eco">
            <div className="">
              <h2>Gate launchpad</h2>
              <p>
                NFT gate empowers the crypto community and upcoming <br />
                high-potential NFT project through completely decentralized{" "}
                <br />
                token auction. <br />
                NFT Gate community can take GATE tokens <br /> to participate in
                a varaiety of whitelisting , seed functing , <br />
                and private sales campaign and support there favorite NFT
                projects
              </p>
            </div>
          </div>
          <img src={mix} alt="" style={mix_style}/>
        </div>
      </div>

    
     
    </div>
  );
}

export default Contain;
