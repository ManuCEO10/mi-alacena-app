'use client';
import { AlertTriangle } from 'lucide-react';

export default function InventoryMonitor() {
  const inventoryStatus = [
    { id: 1, name: 'Puré de Tomate', physical: 1000, virtualCommitted: 850 },
    { id: 2, name: 'Arroz Blanco 1kg', physical: 200, virtualCommitted: 195 },
    { id: 3, name: 'Atún en Lata', physical: 50, virtualCommitted: 60 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Monitor de Riesgo: Físico vs Virtual</h1>
      <div className="grid gap-4">
        {inventoryStatus.map((item) => {
          const ratio = (item.virtualCommitted / item.physical) * 100;
          const isDanger = ratio >= 100; const isWarning = ratio >= 80 && ratio < 100;
          return (
            <div key={item.id} className={`p-4 rounded-lg border ${isDanger ? 'bg-red-50 border-red-200' : isWarning ? 'bg-yellow-50 border-yellow-200' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{item.name}</span>
                {isDanger && <span className="flex text-red-600 font-bold"><AlertTriangle size={16}/> Quiebre de Stock</span>}
              </div>
              <div className="flex text-sm text-gray-600 justify-between mb-1">
                <span>Físico: {item.physical}</span><span>Virtual: {item.virtualCommitted}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full ${isDanger ? 'bg-red-600' : isWarning ? 'bg-yellow-400' : 'bg-green-500'}`} style={{ width: `${Math.min(ratio, 100)}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
