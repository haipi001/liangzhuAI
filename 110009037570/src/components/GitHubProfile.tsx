import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export default function GitHubProfile() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchGitHubUser = async () => {
    if (!username) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('用户未找到');
      const data = await response.json();
      setUserData(data);
      toast.success('GitHub信息加载成功');
    } catch (error) {
      toast.error('获取GitHub信息失败');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
      <h3 className="text-lg font-medium mb-4">GitHub 个人资料</h3>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="输入GitHub用户名"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
          />
          <i className="fa-brands fa-github absolute left-3 top-3 text-gray-400"></i>
        </div>
        <button
          onClick={fetchGitHubUser}
          disabled={loading}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-md transition-all"
        >
          {loading ? '加载中...' : '查询'}
        </button>
      </div>

      {userData && (
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <img 
            src={userData.avatar_url} 
            alt={userData.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              {userData.login}
            </a>
            <div className="flex space-x-4 mt-1 text-sm text-gray-600">
              <span><i className="fa-solid fa-code mr-1"></i> {userData.public_repos} 仓库</span>
              <span><i className="fa-solid fa-users mr-1"></i> {userData.followers} 粉丝</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
