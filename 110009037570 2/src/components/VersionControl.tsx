import { useState } from 'react';
import { toast } from 'sonner';

const versionHistory = [
  { id: 'v1', timestamp: '2025-05-24 10:30', author: 'user1', changes: '新增市场数据集' },
  { id: 'v2', timestamp: '2025-05-23 15:45', author: 'user2', changes: '更新用户行为数据' }
];

export default function VersionControl() {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

  const handleRevert = (versionId: string) => {
    toast.success(`已回滚到版本 ${versionId}`);
    setSelectedVersion(versionId);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">版本控制</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间戳</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作人</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">变更内容</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {versionHistory.map(version => (
              <tr 
                key={version.id}
                className={selectedVersion === version.id ? 'bg-pink-50' : ''}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{version.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{version.author}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{version.changes}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleRevert(version.id)}
                    className="text-pink-600 hover:text-pink-900 mr-3"
                  >
                    回滚到此版本
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    比较差异
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}