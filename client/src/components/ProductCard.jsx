function ProductCard({ product, showActions, onEdit, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm backdrop-blur-sm">
          ${product.price}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {product.description}
        </p>

        {showActions && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onEdit(product)}
              className="flex-1 rounded-xl bg-slate-100 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 rounded-xl bg-red-50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
