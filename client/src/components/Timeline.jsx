import React from 'react';
import './Timeline.css'
import './ProductCard.css'
export function Timeline() {
  return (
    <div id="productflow" className="sectionClass">
      <div className="sectiontitle">
        <h2>Product tracking</h2>
        <span className="headerLine"></span>
      </div>
      <main className="card">
        <div className="card__content">

          <h1 className="item-name">Product Name:</h1>
          <h3 className="item-desc">Boat Rockerz 510</h3>
          <h1 className="item-name">Date:</h1>
          <p className="item-desc">04-10-2022 </p>
          <h1 className="item-name">UID:</h1>
          <p className="item-desc">2</p>
        </div>
      </main>
      <div className="row ">

        <div className="fullWidth eight columns">
          <ul className="cbp_tmtimeline">
            <li>
              <div className="cbp_tmicon cbp_tmicon-phone">
                <i className="faPra fa-briefcase"></i>
              </div>
              <div className="cbp_tmlabel wow fadeInRight animated">
                <h3>Manufacturer</h3>
                <div className="date">
                  <i className="fa fa-calendar"></i>April 2014 - Current
                </div>
                <h4><i className="fa fa-flag"></i>RetailNet Pvt Ltd</h4>
                <p className="productParagraph">Addres 0xeufshk76f7gfj786789f</p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon cbp_tmicon-phone">
                <i className="faPra fa-briefcase"></i>
              </div>
              <div className="cbp_tmlabel wow fadeInRight animated">
                <h3>Manufacturer</h3>
                <div className="date">
                  <i className="fa fa-calendar"></i>April 2014 - Current
                </div>
                <h4><i className="fa fa-flag"></i>RetailNet Pvt Ltd</h4>
                <p className="productParagraph">Addres 0xeufshk76f7gfj786789f</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
