export default function ProductList({ products }) {

    if (!products || products.length === 0) {
        return(
            <div className="w-full bg-yellow-500 text-white font-semibold tracking-wide flex items-center w-full min-w-xs max-w-lg p-4 rounded-md shadow-md shadow-yellow-100">
                <h2>No Products Available</h2>
            </div>
        )
    }

  return (
    <div className="bg-white rouded-lg shadow-md">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider bg-gray-200 border-b border-gray-200 dark:border-neutral-600">
                <tr>
                    <th scope="col" className="px-6 py-4">ID</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="bg-neutral-primary border-b border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap" >{product.id}</th>
                        <td className="px-6 py-4">{product.name}</td>
                        <td className="px-6 py-4">{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table> 
        <div className="py-4 px-6 flex justify-end">
            Total : {products.length}
        </div>
    </div>
  );
}
