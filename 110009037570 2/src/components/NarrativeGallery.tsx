import { useState } from 'react';

export default function NarrativeGallery({ items }: { items: any[] }) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div 
          key={item.id}
          className={`bg-white border border-gray-200 rounded-lg p-4 transition-all duration-200 ${
            expandedCard === item.id ? 'col-span-2' : ''
          }`}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg">{item.title}</h3>
            <button 
              onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
              className="text-pink-500 hover:text-pink-700"
            >
              <i className={`fa-solid ${expandedCard === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
          </div>
          
          <p className="mt-2 text-gray-600">{item.content}</p>
          
          {expandedCard === item.id && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Add a comment..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                  Post
                </button>
              </div>
              
              <div className="mt-3 space-y-2">
                {item.comments.length === 0 && (
                  <p className="text-sm text-gray-400">No comments yet</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}