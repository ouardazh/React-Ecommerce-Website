import ProductsList from "./components/ProductsList";
import './ProductCart.css'
import product1 from "../../assets/img/1.avif";
import product2 from "../../assets/img/product2.avif";
import product3 from "../../assets/img/product3.avif";
import product4 from "../../assets/img/product4.avif";
import product5 from "../../assets/img/product5.avif";


let products = [
  {
    id: 1,
    name: "Oil Control Face Wash with Salicylic Acid",
    price: 499,
    category: "Skincare",
    image: product1,
    available: true,
  },

  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 349,
    category: "Makeup",
    image: product2,
    available: true,
  },

  {
    id: 3,
    name: "10% Niacinamide Face Serum",
    price: 799,
    category: "Skincare",
    image: product3,
    available: false,
  },

  {
    id: 4,
    name: "Gentle Cleanser",
    price: 649,
    category: "Skincare",
    image: product4,
    available: false,
  },
  {
    id: 5,
    name: "Nourishing Hair Care Oil",
    price: 520,
    category: "Haircare",
    image: product5,
    available: true,
  },
];

function Product() {
  return (
    <section className="prodSection">
        <h2 className="titleProd">BES<span>T SELL</span>ERS</h2>
        <div className="listProd">
          <div className="containerProducts">
      
      {products.map((product) => (
        <ProductsList 
        key ={product.id}
        name ={product.name}
        price ={product.price}
        category ={product.category}
        image ={product.image}
        available ={product.available}

        />
      ))}
    </div>

        </div>
        


    <div className="containeBoxes1">
        <div className="firstBox1">
          <p className="icn1">
            <i class="fa-regular fa-truck"></i>
          </p>
          <p>
            FREE SHIPPING <br />
            <small>On orders over 500 MAD </small>{" "}
          </p>
        </div>

        <div className="firstBox">
          <p className="icn">
            <i class="fa-solid fa-arrow-rotate-left"></i>
          </p>
          <p>
            EASY RETURNS<br />
            <small>15 days return policy</small>{" "}
          </p>
        </div>

        <div className="firstBox1">
          <p className="icn1">
            <i class="fa-brands fa-amazon-pay"></i>
          </p>
          <p>
            SECURE PAYMENT<br />
            <small>100% secure checkout</small>{" "}
          </p>
        </div>

        <div className="firstBox1">
          <p className="icn1">
            <i class="fa-solid fa-headset"></i>
          </p>
          <p>
            24/7 SUPPORT<br />
            <small>We're here to help</small>{" "}
          </p>
        </div>
      </div>
    </section>
    
  );
}
export default Product;
