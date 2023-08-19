import CardCom from "./Component/CardCom";
import productList from "./products";

const App = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <h1>Hello world</h1>
      <div style={style}>
        {productList?.map((product, index) => (
          <CardCom
            key={index}
            productName={product.product_name}
            price={product.product_price}
            description={product.product_dec}
            image={product.product_image}
          />
        ))}
      </div>
      {/* {data.map((product, index) => {
            return <Card key={index} style={{ width: '18rem', display: 'flex' }}>
           
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.product_dec}</Card.Subtitle>
                    <Card.Text>
                     Bag Sack Laptop Backpack

                    </Card.Text>
                    <Card.Img src={david} alt='Bag' className='Card-img-top'  />
                    <Card.Link href="#">Read More ...</Card.Link>
                </Card.Body>
               
            </Card> 
           
        })}
     */}
    </>
  );
};

export default App;
