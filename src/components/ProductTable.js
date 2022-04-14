import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  // console.log('products', products);
  const rows = [];

  products.forEach(product => {
    rows.push(
      <ProductRow key={product.id} product={product} />
    );
  });

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='table__th' colSpan={2} style={{textAlign: 'center'}}>Name</th>
          <th className='table__th'>Categories</th>
          <th className='table__th'>Colors</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;