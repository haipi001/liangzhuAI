import { useState } from 'react';

export default function ProjectGrid({ projects }: { projects: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm">
          All
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {projects.map(project => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
              <i className={`fa-solid ${project.icon} text-pink-500`}></i>
            </div>
            <span className="font-medium">{project.name}</span>
            <span className="text-xs text-gray-500">{project.category}</span>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{selectedProject.name}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <i className="fa-solid fa-coins text-2xl text-pink-500"></i>
              </div>
              <div>
                <p className="font-medium">{selectedProject.category}</p>
                <p className="text-sm text-gray-500">Project ID: {selectedProject.id}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-600">Detailed information about this project will be displayed here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}