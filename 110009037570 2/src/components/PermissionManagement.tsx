import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';

const RoleSchema = z.enum(['superAdmin', 'departmentAdmin', 'editor', 'viewer']);
type Role = z.infer<typeof RoleSchema>;

const PermissionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

const UserPermissionSchema = z.object({
  userId: z.string(),
  role: RoleSchema,
  permissions: z.array(PermissionSchema),
});

type UserPermission = z.infer<typeof UserPermissionSchema>;

const mockPermissions: UserPermission[] = [
  {
    userId: 'user1',
    role: 'superAdmin',
    permissions: [
      { id: 'p1', name: '系统配置', description: '可修改AI知识库全局设置和模型参数' },
      { id: 'p2', name: '用户管理', description: '可管理AI学习小组权限和访问控制' },
      { id: 'p3', name: '数据管理', description: '可管理训练数据集和知识图谱' }
    ]
  },
  {
    userId: 'user2',
    role: 'departmentAdmin',
    permissions: [
      { id: 'p3', name: '内容审核', description: '可审核AI学习资料' },
      { id: 'p4', name: '用户管理', description: '可管理研究小组成员' }
    ]
  }
];

export default function PermissionManagement() {
  const [users, setUsers] = useState<UserPermission[]>(mockPermissions);
  const [selectedUser, setSelectedUser] = useState<UserPermission | null>(null);

  const handleSave = (updatedUser: UserPermission) => {
    setUsers(users.map(u => u.userId === updatedUser.userId ? updatedUser : u));
    toast.success('权限更新成功');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">权限管理</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">权限</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.userId}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <select 
                    value={user.role}
                    onChange={(e) => {
                      const updated = {...user, role: e.target.value as Role};
                      handleSave(updated);
                    }}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="superAdmin">超级管理员</option>
                    <option value="departmentAdmin">部门管理员</option>
                    <option value="editor">编辑者</option>
                    <option value="viewer">查看者</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="space-y-1">
                    {user.permissions.map(p => (
                      <div key={p.id} className="flex items-center">
                        <span className="mr-2">{p.name}</span>
                        <i className="fa-solid fa-info-circle text-gray-400" title={p.description}></i>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => setSelectedUser(user)}
                    className="text-pink-600 hover:text-pink-900 mr-3"
                  >
                    详细设置
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