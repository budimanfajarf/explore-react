import Image from "./Image";

const ProductRow = ({ product }) => {
  const {
    image_url,
    name,
  } = product;

  return (
    <tr>
      <td className='table__td text-center'>
        <Image
          url={image_url}
          alt={name}
          className='table__img'
        />
      </td>
      <td className='table__td'>{name}</td>
    </tr>
  );
}

export default ProductRow;