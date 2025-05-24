import { useState } from 'react';

const initialData = [
  { id: 1, name: 'GPT-5', price: '前沿', change: '+25%', volume: '1.8T参数' },
  { id: 2, name: 'Stable Diffusion', price: '创新', change: '+18%', volume: '2.1B参数' },
  { id: 3, name: 'AlphaFold 3', price: '突破', change: '+30%', volume: '3.2B参数' },
  { id: 4, name: 'Tesla Optimus', price: '实践', change: '+15%', volume: '175B参数' },
  { id: 5, name: 'DeepSeek', price: '开源', change: '+22%', volume: '1.2T参数' }
];

export default function SmartTable() {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (id: number) => {
    setEditingId(id);
    setEditData(data.find(item => item.id === id) || {});
  };

  const handleSave = () => {
    setData(data.map(item => 
      item.id === editingId ? { ...item, ...editData } : item
    ));
    setEditingId(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editData.price}
                    onChange={(e) => setEditData({...editData, price: e.target.value})}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  <div className="text-sm text-gray-900">{item.price}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editData.change}
                    onChange={(e) => setEditData({...editData, change: e.target.value})}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  <div className={`text-sm ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editData.volume}
                    onChange={(e) => setEditData({...editData, volume: e.target.value})}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  <div className="text-sm text-gray-900">{item.volume}</div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {editingId === item.id ? (
                  <button
                    onClick={handleSave}
                    className="text-pink-600 hover:text-pink-900 mr-3"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-pink-600 hover:text-pink-900 mr-3"
                  >
                    Edit
                  </button>
                )}
                <button className="text-gray-600 hover:text-gray-900">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}