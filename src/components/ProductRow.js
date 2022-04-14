import { joinArrayOfObject } from 'libs/helpers';
import Image from "./Image";

const ProductRow = ({ product }) => {
  const {
    image_url,
    name,
    categories,
    colors,
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
      <td className='table__td'>{joinArrayOfObject(categories, 'name') || '—'}</td>
      <td className='table__td'>{joinArrayOfObject(colors, 'name') || '—'}</td>
    </tr>
  );
}

export default ProductRow;