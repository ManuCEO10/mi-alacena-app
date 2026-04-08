'use client';
import { PlusCircle } from 'lucide-react';

export default function CatalogManager() {
  const products = [
    { id: 1, sku: 'LCH-001', name: 'Leche Larga Vida', brand: 'Marca A', physicalStock: 500, coldChain: false },
    { id: 2, sku: 'YOG-002', name: 'Yogur Bebible', brand: 'Marca B', physicalStock: 150, coldChain: true },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Catálogo de Productos</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"><PlusCircle size={18} /> Nuevo</button>
      </div>
      <table className="w-full text-left text-sm bg-white border rounded-lg">
        <thead className="bg-gray-50 border-b"><tr><th className="p-4">SKU</th><th className="p-4">Producto</th><th className="p-4">Stock Físico</th><th className="p-4">Cadena Frío</th></tr></thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id} className="border-b hover:bg-gray-50">
              <td className="p-4"><span className="font-mono text-xs block">{prod.sku}</span></td>
              <td className="p-4 font-medium text-gray-800">{prod.name}</td>
              <td className="p-4">{prod.physicalStock} un.</td>
              <td className="p-4">{prod.coldChain ? '❄️ Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
