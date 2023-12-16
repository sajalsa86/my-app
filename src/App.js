import logo from './logo.svg';
import './App.css';

const cssApply = {
  color: 'black',
  width: '300px',
  marginTop: '50px',
  backgroundColor: 'pink',
  borderRadius: '15%',
  padding: '20px',
  margin: '10px auto'
};

const App = () => {
  const employees2 = ['Sajal', 'Galib', 'Mafuz'];
  const employees = [
    { name: 'Sajal Hossain', job: 'Web Developer' },
    { name: 'Asadullah Galib', job: 'Bank Officer' },
    { name: 'Mahfuz', job: 'Do Officer' }
  ];
  const products = [
    { name: 'Laptop', price: 53000, brand: 'Lenevo' },
    { name: 'Desktop', price: 45000, brand: 'Intel' },
    { name: 'Watch', price: 3000, brand: 'Casio' }
  ];
  return (
    <div className="App">
      {employees2.map(man => <li>{man}</li>)}
      <Friend fullName="Md Mahfuz Hossain" job="do Bank Officer"></Friend>
      <Friend fullName="Md Sarour Hossain" job="Sdo Bank Officer"></Friend>
      {/* dynamic way */}
      {employees.map(employee => <Person name={employee.name} job={employee.job} ></Person>)};
      {products.map(product => <Product name={product.name} price={product.price} brand={product.brand}></Product>)}
    </div>
  );
};
const Friend = (props) => {
  return (
    <section className='friend-box'>
      <h2>{props.fullName}</h2>
      <p>{props.job}</p>
    </section>
  )
};

const Person = (props) => {
  console.log(props)
  return (
    <div style={cssApply}>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
};

const Product = (props) => {
  return (
    <div style={{ backgroundColor: 'gold', padding: '10px', color: 'green', textAlign: 'center', border: '1px solid red', margin: '10px auto', width: '25%' }}>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.brand}</p>
    </div>
  )
};

export default App;
