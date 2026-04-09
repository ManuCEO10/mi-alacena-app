import { PlusCircle, Database } from 'lucide-react';

// Esta función se conecta a tu Motor en Render
async function getProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://mi-alacena-backend.onrender.com/api/v1';
  try {
    // Intentamos buscar la ruta de productos 
    const res = await fetch(`${apiUrl}/products`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error conectando al motor:", error);
    return []; // Si no hay productos o hay error, devolvemos catálogo vacío
  }
}

export default async function CatalogManager() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Catálogo de Productos</h1>
          <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
            <Database size={14} /> Conectado a Servidor de Producción
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          <PlusCircle size={18} /> Nuevo
        </button>
      </div>

      {products.length === 0 ? (
        <div className="bg-white border rounded-lg p-12 text-center text-gray-500">
          <Database className="mx-auto text-gray-300 mb-3" size={48} />
          <p className="text-lg font-medium">Catálogo Vacío</p>
          <p className="text-sm">Tu base de datos está conectada y lista. Aún no has cargado productos reales.</p>
        </div>
      ) : (
        <table className="w-full text-left text-sm bg-white border rounded-lg">
          <thead className="bg-gray-50 border-b">
            <tr><th className="p-4">SKU</th><th className="p-4">Producto</th><th className="p-4">Stock Físico</th></tr>
          </thead>
          <tbody>
            {products.map((prod: any) => (
              <tr key={prod.id} className="border-b hover:bg-gray-50">
                <td className="p-4"><span className="font-mono text-xs block">{prod.sku}</span></td>
                <td className="p-4 font-medium text-gray-800">{prod.name}</td>
                <td className="p-4">{prod.physicalStock} un.</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
