import type { ProductDisplayProps } from '../../types';

export const ProductDisplay = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* TODO: <img> using product.imageUrl, ONLY if imageUrl exists */}
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 rounded-full mx-auto" />
      )}

      <div className="p-4">
        {/* TODO: product.name in an <h3> */}

        {/* TODO: price in a <p>: ${product.price.toFixed(2)} */}

        {/* TODO: product.description, only if showDescription */}

        {/* TODO: only if showStockStatus:
                 {product.inStock ? 'In Stock' : 'Out of Stock'} */}

        {/* TODO: "Add to Cart" button, only if onAddToCart exists.
                 onClick calls onAddToCart with product.id.
                 Add disabled={!product.inStock} */}

        {children}
      </div>
    </div>
  );
};