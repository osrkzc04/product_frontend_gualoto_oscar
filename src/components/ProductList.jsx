export default function ProductList({ products }) {

    if (!products || products.length === 0) {
        return(
            <div>
                <h2>No Products Available</h2>
            </div>
        )
    }

  return (
    <div>
        <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">ID</th>
                    <th scope="col" className="px-6 py-3 font-medium">Name</th>
                    <th scope="col" className="px-6 py-3 font-medium">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap" >{product.id}</th>
                        <td className="px-6 py-4">{product.name}</td>
                        <td className="px-6 py-4">{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table> 
    </div>
  );
}
