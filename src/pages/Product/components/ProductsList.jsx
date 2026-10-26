import './ProductsList.css';


function ProductsList(prd) {
  function viewDetails(){
    alert("Product Name:" +prd.name+ "\n" + "Price: " +prd.price );
   }

   function addToCart(){
     alert(prd.name +" Added to cart");
      
     
   }
  return (
    
        <>
    
        <div className="prodList">
          <img src={prd.image} alt="" />
          <div className="infoProducts">
            <p className="categoryProduct"> {prd.category} </p>
            <h5 className="nameProduct"> {prd.name} </h5>
            <p className="priceProduct"> {prd.price} MAD</p>
            {prd.available ? (
              <>
            <button onClick={addToCart} className="addBtn">ADD TO CART</button>
            <button onClick={viewDetails} className="viewDetails">View Details</button>
            </>
          ) : (
            <p className="outofstock">Out off Stock</p>
          )}
           
          </div>
        </div>
        
     
    </>
   
    
  );
}
export default ProductsList;
