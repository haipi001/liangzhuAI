import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import FlowChart from '@/components/FlowChart';
import NarrativeGallery from '@/components/NarrativeGallery';
import ProjectGrid from '@/components/ProjectGrid';
import SmartTable from '@/components/SmartTable';
import PartnerWall from '@/components/PartnerWall';

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock data
  const flowData = {
    nodes: [
      { id: '1', name: 'AI技术发展' },
      { id: '2', name: '模型性能' },
      { id: '3', name: '应用场景' }
    ],
    edges: [
      { source: '1', target: '2' },
      { source: '2', target: '3' }
    ]
  };

  const narratives = [
    { id: '1', title: '大语言模型发展', content: '分析大语言模型的技术演进路线', comments: [] },
    { id: '2', title: '计算机视觉应用', content: '探索计算机视觉在医疗领域的应用', comments: [] }
  ];

const projects = [
  { id: '1', name: '多模态大模型', category: '跨模态学习', icon: 'fa-layer-group' },
  { id: '2', name: 'AI辅助科研', category: '科学研究', icon: 'fa-flask' },
  { id: '3', name: 'AI伦理研究', category: '社会影响', icon: 'fa-scale-balanced' },
  { id: '4', name: 'AI教育平台', category: '学习系统', icon: 'fa-graduation-cap' },
  { id: '5', name: 'AI医疗诊断', category: '医疗健康', icon: 'fa-heart-pulse' }
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-white font-['Inter']">
      {/* 背景装饰元素 */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
      </div>

      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex pt-16">
        <Sidebar collapsed={sidebarCollapsed} />
        
        <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'} flex-1 p-8`}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">AI研究仪表盘</h1>
            <p className="text-gray-600">实时监控和分析AI研究进展与团队协作</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">数据流程图</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <i className="fa-solid fa-clock"></i>
                  <span>实时更新</span>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-4">
                <FlowChart data={flowData} />
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">研究叙事</h2>
                <button className="text-sm text-pink-500 hover:text-pink-700">
                  <i className="fa-solid fa-plus mr-1"></i>
                  添加叙事
                </button>
              </div>
              <NarrativeGallery items={narratives} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">AI项目库</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="搜索项目..." 
                      className="pl-8 pr-4 py-1.5 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
                  </div>
                  <button className="px-3 py-1.5 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition-colors">
                    筛选
                  </button>
                </div>
              </div>
              <ProjectGrid projects={projects} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                <h2 className="text-xl font-semibold mb-4">AI模型数据</h2>
                <SmartTable />
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">合作伙伴网络</h2>
                  <button className="text-sm text-blue-500 hover:text-blue-700">
                    <i className="fa-solid fa-arrow-up-right-from-square mr-1"></i>
                    查看全部
                  </button>
                </div>
                <div className="h-64">
                  <PartnerWall />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}