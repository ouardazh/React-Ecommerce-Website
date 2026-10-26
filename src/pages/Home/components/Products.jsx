import "./Products.css";
import image1 from '../../../assets/img/1.avif'
import image2 from '../../../assets/img/2.avif'
import image3 from '../../../assets/img/3.avif'
import image4 from '../../../assets/img/4.avif'
import image5 from '../../../assets/img/5.avif'



function Products() {
  return (
    <section className="productsSection">
      <div className="containeBoxes">
        <div className="firstBox">
          <p className="icn">
            <i class="fa-brands fa-pagelines"></i>
          </p>
          <p>
            Clean Ingredients <br />
            <small>Safe & toxin-free </small>{" "}
          </p>
        </div>

        <div className="firstBox">
          <p className="icn">
            <i class="fa-solid fa-flask"></i>
          </p>
          <p>
            Clinically Proven <br />
            <small>Dermatologically tested</small>{" "}
          </p>
        </div>

        <div className="firstBox">
          <p className="icn">
            <i class="fa-solid fa-frog"></i>
          </p>
          <p>
            Cruelty Free <br />
            <small>We never test on animals</small>{" "}
          </p>
        </div>

        <div className="firstBox">
          <p className="icn">
            <i class="fa-solid fa-leaf"></i>
          </p>
          <p>
            Sustainable Beauty <br />
            <small>Good for you & the planet</small>{" "}
          </p>
        </div>
      </div>

      <h2 className="titleShopByCategory">SHOP BY <span>CAT</span>EGORY</h2>
      <div className="shopByCategory">
        <div className="containerImg">
            <img src={image1} alt="" />
            <p>SKINCARE</p>
        </div>

        <div className="containerImg">
            <img src={image2} alt="" />
            <p>MAKEUP</p>
        </div>

        <div className="containerImg">
            <img src={image3} alt="" />
            <p>HAIRCARE</p>
        </div>


        <div className="containerImg">
            <img src={image4} alt="" />
            <p>SUN CARE</p>
        </div>

        <div className="containerImg">
            <img src={image5} alt="" />
            <p>GIFT SETS</p>
        </div>
      </div>

      <div className="containerOffer">
        <div className="offerbox">
          <p>LIMITED TIME OFFER</p>
          <h2>Up to 30% Off <br />
              on Best Sellers
          </h2>

          <p>Glow more, spend less. <br />
             Treat your skin today!</p>

             <button className="shopSaleBtn">SHOP THE SALE</button>
        </div>

        <div className="imageOffer">
          <img src={image2} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Products;
