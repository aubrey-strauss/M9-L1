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
                <h3 className="text-lg font-semibold">{product.name}</h3>

                {/* TODO: price in a <p>: ${product.price.toFixed(2)} */}
                <p className="text-gray-600">${product.price.toFixed(2)}</p>

                {/* TODO: product.description, only if showDescription */}
                {showDescription && (
                    <p className="text-gray-500">{product.description}</p>
                )}

                {/* TODO: only if showStockStatus:
                 {product.inStock ? 'In Stock' : 'Out of Stock'} */}
                {showStockStatus && (
                    <p className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                )}

                {/* TODO: "Add to Cart" button, only if onAddToCart exists. onClick calls onAddToCart with product.id. Add disabled={!product.inStock} */}
                {onAddToCart && (
                    <button
                        onClick={() => onAddToCart(product.id)}
                        disabled={!product.inStock}
                        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        Add to Cart
                    </button>
                )}

                {children}
            </div>
        </div>
    );
};