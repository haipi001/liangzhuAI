import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'AI技术趋势', icon: 'fa-chart-line' },
  { name: '学习资源库', icon: 'fa-book' },
  { name: 'AI项目库', icon: 'fa-grid-2' },
  { name: '数据集管理', icon: 'fa-table' },
  { name: '研究团队', icon: 'fa-users' },
  { name: '人才库', icon: 'fa-user-graduate' },
  { name: '系统设置', icon: 'fa-cog' }
];

type SidebarProps = {
  collapsed: boolean;
  customItems?: Array<{name: string, icon: string}>;
  onItemClick?: (name: string) => void;
};

export default function Sidebar({ collapsed, customItems, onItemClick }: SidebarProps) {
  const items = customItems || menuItems;
  
  return (
    <aside className={cn(
      "fixed top-16 bottom-0 bg-white/80 backdrop-blur-md border-r border-white/50 shadow-sm overflow-y-auto transition-all duration-300 z-40",
      collapsed ? "w-20" : "w-64"
    )}>
      <nav className="p-4">
        {!collapsed && (
          <div className="mb-6 px-3 py-2 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-1">AI知识库</h3>
            <p className="text-xs text-gray-400">当前版本: v2.5.0</p>
          </div>
        )}
        
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.name}>
              <button 
                onClick={() => onItemClick?.(item.name)}
                className={cn(
                  "w-full flex items-center p-3 rounded-xl hover:bg-gray-100/50 transition-colors group",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors",
                  collapsed ? "mr-0 group-hover:bg-gray-100/50" : "bg-gray-100/50 group-hover:bg-gradient-to-r from-blue-500/20 to-pink-500/20"
                )}>
                  <i className={`fa-solid ${item.icon} ${collapsed ? 'text-lg' : 'text-base'} text-gray-600 group-hover:text-gray-900`}></i>
                </div>
                {!collapsed && (
                  <span className="text-gray-700 group-hover:text-gray-900">{item.name}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
        
        {!collapsed && (
          <div className="mt-8 px-3 pt-4 border-t border-gray-200/50">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center text-white text-sm">
                AI
              </div>
              <div>
                <p className="text-sm font-medium">AI助手</p>
                <p className="text-xs text-gray-500">在线解答问题</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}