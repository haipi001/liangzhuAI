import { useState } from 'react';
import TalentPool from '@/components/TalentPool';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import PermissionManagement from '@/components/PermissionManagement';
import DataWarehouse from '@/components/DataWarehouse';
import VersionControl from '@/components/VersionControl';
import { cn } from '@/lib/utils';

const adminMenuItems = [
  { name: '权限管理', icon: 'fa-shield-alt' },
  { name: '数据仓库', icon: 'fa-database' },
  { name: '人才库', icon: 'fa-user-graduate' },
  { name: '版本控制', icon: 'fa-history' }
];

export default function Admin() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('权限管理');

  const renderContent = () => {
    switch (activeTab) {
      case '权限管理':
        return <PermissionManagement />;
      case '数据仓库':
        return <DataWarehouse />;
      case '人才库':
        return <TalentPool />;
      case '版本控制':
        return <VersionControl />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD6E0] to-white font-['Inter']">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex pt-16">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          customItems={adminMenuItems}
          onItemClick={setActiveTab}
        />
        
        <main className={cn(
          "transition-all duration-300 flex-1 p-6",
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        )}>
          <div className="bg-white rounded-lg shadow p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}