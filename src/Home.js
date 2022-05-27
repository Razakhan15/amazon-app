import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="12345"
          title="the lean startup"
          price={11.34}
          rating={5}
          image="https://www.wordstream.com/wp-content/uploads/2021/07/amazon-seo-product-images.jpg.webp"
        />
        <Product
          id="12345"
          title="the lean startup"
          price={13}
          rating={5}
          image="https://d3rlgjrg24xpvv.cloudfront.net/wp-content/uploads/2017/12/26073945/Amazon-A-Product-Image-Service-1.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="the lean startup"
          price={15}
          rating={5}
          image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
        />
        <Product
          id="12345"
          title="the lean startup"
          price={23}
          rating={5}
          image="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg"
        />
        <Product
          id="12345"
          title="the lean startup"
          price={52}
          rating={3}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622837670-71zny7btrll-ac-sl1500-1622837659.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="the lean startup"
          price={24}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJ2bnmwwOVkN_biJIorgJwCrKKPmHJ_ojhJSJfjO_rbuwqQgCGoNfQerHlNa_ryDGpcM&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
