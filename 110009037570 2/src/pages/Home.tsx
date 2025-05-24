import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
          <section className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  AI共学知识库平台
                </h1>
                <p className="text-xl text-gray-600">
                  一个为AI学习者和研究者提供的协作平台，用于可视化AI技术发展、
                  组织学习资源，跟踪AI研究进展，并促进跨学科协作。
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    开始探索
                  </button>
                  <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                    了解更多
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20AI%20learning%20platform%20illustration%20with%20people%20collaborating%20around%20data%20visualization&sign=b3eaa0df39bef2729f96ce379caf7f3e" 
                  alt="AI协作学习"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <i className="fa-solid fa-users text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">实时协作学习</h3>
                <p className="text-gray-600">与团队成员共同学习和研究AI技术文档。</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                  <i className="fa-solid fa-chart-line text-pink-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">技术可视化</h3>
                <p className="text-gray-600">创建交互式的AI技术发展路线图和算法分析图表。</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <i className="fa-solid fa-database text-purple-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">数据集管理</h3>
                <p className="text-gray-600">高效管理和共享AI训练数据集与知识图谱。</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}