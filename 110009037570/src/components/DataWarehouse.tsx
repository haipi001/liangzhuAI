import { useState } from 'react';
import { Sankey } from 'recharts';

const etlData = {
  nodes: [
    { name: '原始数据' },
    { name: '数据清洗' },
    { name: '特征提取' },
    { name: '模型训练' },
    { name: '知识图谱构建' }
  ],
  links: [
    { source: 0, target: 1, value: 10 },
    { source: 1, target: 2, value: 8 },
    { source: 2, target: 3, value: 8 },
    { source: 3, target: 4, value: 6 }
  ]
};

const datasets = [
  { id: 'ds1', name: '大语言模型训练数据', size: '5.2TB', lastUpdated: '2025-05-24' },
  { id: 'ds2', name: '多模态学习数据集', size: '8.1TB', lastUpdated: '2025-05-23' },
  { id: 'ds3', name: '强化学习模拟环境', size: '3.5TB', lastUpdated: '2025-05-22' },
  { id: 'ds4', name: 'AI伦理研究数据', size: '1.2TB', lastUpdated: '2025-05-21' }
];

export default function DataWarehouse() {
  const [activeDataset, setActiveDataset] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">数据仓库</h2>
          <p className="text-gray-500">管理和探索AI训练数据集</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center">
          <i className="fa-solid fa-plus mr-2"></i>
          添加数据集
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">数据集列表</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索数据集..."
                className="pl-8 pr-4 py-1.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-transparent"
              />
              <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </div>
          </div>
          <div className="space-y-3">
            {datasets.map(dataset => (
              <div 
                key={dataset.id}
                onClick={() => setActiveDataset(dataset.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                  activeDataset === dataset.id 
                    ? 'bg-gradient-to-r from-blue-50 to-pink-50 border border-blue-200/50 shadow-sm' 
                    : 'bg-white hover:bg-gray-50/80 border border-gray-200/50 hover:border-gray-300/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-100/50 flex items-center justify-center mr-3">
                      <i className="fa-solid fa-database text-blue-500"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{dataset.name}</div>
                      <div className="text-xs text-gray-500">最后更新: {dataset.lastUpdated}</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100/50 px-2 py-1 rounded">
                    {dataset.size}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">数据处理流程</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <i className="fa-solid fa-circle-info text-blue-500"></i>
              <span>实时监控</span>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-4">
            <Sankey
              width={400}
              height={200}
              data={etlData}
              node={{ stroke: '#3B82F6', strokeWidth: 2, fill: '#EFF6FF' }}
              link={{ stroke: '#8B5CF6', strokeWidth: 1, fillOpacity: 0.8 }}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">数据统计概览</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-gray-100/50">
              日
            </button>
            <button className="px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-gray-100/50">
              周
            </button>
            <button className="px-3 py-1 text-sm rounded-full bg-blue-500 text-white">
              月
            </button>
          </div>
        </div>
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=data%20statistics%20dashboard%20with%20charts%20and%20metrics%20for%20AI%20datasets&sign=9cfc0698bc9862170de3692237baf075" 
          alt="数据统计"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}