import "./products.css"

const Products = ({ products }) => {
    console.log(products);
  
    return (
      <div className="list">
        {products.map((product, index) => {
          return (
            <div key={index} className="item">
              <h1>{product.title}</h1>
              <p>{product.desc}</p>
              <strong style={{display:"block"}}>{product.price}</strong>
              <span>{product.rate}</span>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Products;
  