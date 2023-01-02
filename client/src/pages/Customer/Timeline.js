import React from "react";
import "../../components/Timeline.css";
import "../../components/ProductCard.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Timeline = (props) => {
  let { id } = useParams();
  const web3 = props.web3;
  const supplyChainContract = props.supplyChainContract;
  const [productData, setProductData] = React.useState([]);
  const [productHistory, setProductHistory] = React.useState([]);

  const map = [
    "Manufactured",
    "Bought By Third Party",
    "Shipped From Manufacturer",
    "Received By Third Party",
    "Bought By Customer",
    "Shipped By Third Party",
    "Received at DeliveHub",
    "Shipped From DeliveryHub",
    "Received By Customer",
  ];

  useEffect(() => {
    findProduct(id);
  }, []);

  const findProduct = async (search) => {
    var arr = [];
    var temp = [];
    try {
      setProductData([]);
      setProductHistory([]);
      var a = await supplyChainContract.methods
        .fetchProductPart1(parseInt(search), "product", 0)
        .call();
      var b = await supplyChainContract.methods
        .fetchProductPart2(parseInt(search), "product", 0)
        .call();
      var c = await supplyChainContract.methods
        .fetchProductPart3(parseInt(search), "product", 0)
        .call();
      temp.push(a);
      temp.push(b);
      temp.push(c);
      setProductData(temp);
      console.log(temp);
      arr = [];
      var l = await supplyChainContract.methods
        .fetchProductHistoryLength(parseInt(search))
        .call();

      arr = [];
      for (var i = 0; i < l; i++) {
        var h = await supplyChainContract.methods
          .fetchProductPart1(parseInt(search), "history", i)
          .call();
        var k = await supplyChainContract.methods
          .fetchProductPart2(parseInt(search), "history", i)
          .call();
        var j = await supplyChainContract.methods
          .fetchProductPart3(parseInt(search), "history", i)
          .call();
        temp = [];
        temp.push(h);
        temp.push(k);
        temp.push(j);
        arr.push(temp);
        console.log(arr);
      }
      setProductHistory(arr);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="body">
      <div id="productflow" className="sectionClass">
        <div className="sectiontitle">
          <h2>Product tracking</h2>
          <span className="headerLine"></span>
        </div>
        <main className="card">
          <div className="card__content">
            <div>
              <h1 className="item-name">Product Name</h1>
              <h3 className="item-desc">{productData?.[1]?.[1]}</h3>
            </div>

            <div>
              <h1 className="item-name">Date:</h1>
              <p className="item-desc">{productData?.[1]?.[0]}</p>
            </div>

            <div>
              <h1 className="item-name">UID:</h1>
              <p className="item-desc">{id}</p>
            </div>
          </div>
        </main>
        <div className="row ">
          <div className="fullWidth eight columns">
            <ul className="cbp_tmtimeline">
              {productHistory.length !== 0 ? (
                productHistory.map((row) => {
                  console.log(row[1][0]);
                  const d = new Date(parseInt(row[1][0] * 1000));
                  return (
                    <li>
                      <div className="cbp_tmicon cbp_tmicon-phone">
                        <i className="faPra fa-briefcase"></i>
                      </div>
                      <div className="cbp_tmlabel wow fadeInRight animated">
                        <h3>{map[row[1][5]]}</h3>
                        <div className="date">
                          <i className="fa fa-calendar"></i>{JSON.stringify(d)}
                        </div>
                        <h4>
                          <i className="fa fa-flag"></i>RetailNet Pvt Ltd
                        </h4>
                        <p className="productParagraph">
                        Owner : 
                          {
                            row[0][2]
                          }
                        </p>
                      </div>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
