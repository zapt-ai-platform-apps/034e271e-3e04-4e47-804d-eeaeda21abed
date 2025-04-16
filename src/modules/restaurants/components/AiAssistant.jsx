import React, { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import * as Sentry from "@sentry/browser";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!query.trim() || isLoading) return;
    
    const userQuery = query.trim();
    setQuery('');
    setError(null);
    setIsLoading(true);
    
    // Add user question to history
    setHistory(prev => [...prev, { type: 'user', text: userQuery }]);
    
    try {
      const response = await fetch('/api/aiResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: userQuery })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }
      
      const data = await response.json();
      setHistory(prev => [...prev, { type: 'assistant', text: data.response }]);
    } catch (error) {
      console.error('AI Response Error:', error);
      Sentry.captureException(error, {
        extra: { query: userQuery }
      });
      setError('Sorry, I couldn\'t process your request. Please try again later.');
      setHistory(prev => [...prev, { type: 'error', text: 'Sorry, I couldn\'t process your request. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && history.length === 0) {
      setHistory([
        { 
          type: 'assistant', 
          text: 'Hello! I can help you find information about Pakistani cuisine, restaurants, and food recommendations. What would you like to know?' 
        }
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-[350px] h-[450px] border border-gray-200">
          <div className="bg-[#FF5A5F] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-medium">Food Khao Assistant</h3>
              <p className="text-xs">Ask me about Pakistani food</p>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:bg-[#ff4247] rounded-full p-1"
            >
              <FiX size={20} />
            </button>
          </div>
          
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {history.map((item, index) => (
              <div 
                key={index} 
                className={`${
                  item.type === 'user' 
                    ? 'bg-gray-100 ml-auto' 
                    : item.type === 'error' 
                      ? 'bg-red-50 border-l-4 border-red-500' 
                      : 'bg-[#f8f9fa] border-l-4 border-[#FF5A5F]'
                } p-3 rounded-lg max-w-[85%] ${item.type === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}
              >
                {item.text}
              </div>
            ))}
            
            {isLoading && (
              <div className="bg-[#f8f9fa] p-3 rounded-lg max-w-[85%] rounded-tl-none border-l-4 border-[#FF5A5F]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-[#FF5A5F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[#FF5A5F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#FF5A5F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about Pakistani food..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-[#FF5A5F] text-white p-2 rounded-r-lg hover:bg-[#ff4247] focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] disabled:opacity-50 cursor-pointer"
              disabled={isLoading || !query.trim()}
            >
              <FiSend size={20} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#FF5A5F] text-white p-3 rounded-full shadow-lg hover:bg-[#ff4247] cursor-pointer flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <FiMessageSquare size={24} />
        </button>
      )}
    </div>
  );
}