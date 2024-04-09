import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_P = [
  {   id: 'p11',
      price: 6,
      title: 'My first book',
      description: 'dummy data'},
  {   id: 'p12',
      price: 16,
      title: 'My second book',
      description: 'dummy data 2'},
  {   id: 'p13',
      price: 62,
      title: 'My third book',
      description: 'dummy data 3'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_P.map((product) => (
          <ProductItem
          key={product.id} 
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
