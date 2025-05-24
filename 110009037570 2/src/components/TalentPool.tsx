import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const TalentSchema = z.object({
  id: z.string(),
  name: z.string().min(2, '姓名至少2个字符'),
  expertise: z.string().min(3, '专业领域至少3个字符'),
  level: z.enum(['初级', '中级', '高级', '专家']),
  contact: z.string().email('请输入有效邮箱'),
  skills: z.array(z.string()).min(1, '至少选择一项技能')
});

type Talent = z.infer<typeof TalentSchema>;

const initialTalents: Talent[] = [
  {
    id: '1',
    name: '张研究员',
    expertise: '机器学习',
    level: '高级',
    contact: 'zhang@example.com',
    skills: ['Python', 'TensorFlow']
  },
  {
    id: '2',
    name: '李工程师',
    expertise: '计算机视觉',
    level: '专家',
    contact: 'li@example.com',
    skills: ['PyTorch', 'OpenCV']
  }
];

export default function TalentPool() {
  const [talents, setTalents] = useState<Talent[]>(initialTalents);
  const [isAdding, setIsAdding] = useState(false);
  const [newTalent, setNewTalent] = useState<Partial<Talent>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAddTalent = () => {
    const result = TalentSchema.safeParse(newTalent);
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
      return;
    }
    
    setTalents([...talents, { ...result.data, id: Date.now().toString() }]);
    setNewTalent({});
    setIsAdding(false);
    setErrors({});
    toast.success('人才信息已添加');
  };

  const filteredTalents = talents.filter(talent =>
    talent.name.includes(searchQuery) ||
    talent.expertise.includes(searchQuery) ||
    talent.skills.some(skill => skill.includes(searchQuery))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">AI人才库</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
        >
          <i className="fa-solid fa-plus mr-2"></i>
          登记人才
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="搜索人才..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-transparent"
        />
        <i className="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>

      {isAdding && (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <h3 className="text-lg font-medium mb-4">新增人才信息</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <input
                value={newTalent.name || ''}
                onChange={(e) => setNewTalent({...newTalent, name: e.target.value})}
                className={cn(
                  "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30",
                  errors.name && 'border-red-500'
                )}
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">专业领域</label>
              <input
                value={newTalent.expertise || ''}
                onChange={(e) => setNewTalent({...newTalent, expertise: e.target.value})}
                className={cn(
                  "w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30",
                  errors.expertise && 'border-red-500'
                )}
              />
              {errors.expertise && <p className="text-sm text-red-500 mt-1">{errors.expertise}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">级别</label>
              <select
                value={newTalent.level || ''}
                onChange={(e) => setNewTalent({...newTalent, level: e.target.value as any})}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
              >
                <option value="">选择级别</option>
                <option value="初级">初级</option>
                <option value="中级">中级</option>
                <option value="高级">高级</option>
                <option value="专家">专家</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddTalent}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                确认添加
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTalents.map(talent => (
          <div key={talent.id} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-white/50 hover:shadow-lg transition-all">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center text-white">
                {talent.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-medium">{talent.name}</h3>
                <p className="text-sm text-gray-500">{talent.expertise} • {talent.level}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fa-solid fa-envelope mr-2"></i>
                {talent.contact}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {talent.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}