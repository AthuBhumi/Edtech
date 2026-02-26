import React, { useState, useRef, useEffect } from 'react';
import { AriaOrb } from './AriaOrb';
import { AriaMarkdown } from './AriaMarkdown';
import { Send, Mic, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export type AriaChatMessage = {
  id: string;
  role: 'user' | 'aria';
  content: string;
  timestamp: Date;
};

interface AriaChatProps {
  messages: AriaChatMessage[];
  onSendMessage: (message: string) => void;
  quickReplies?: string[];
  isTyping?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const AriaChat: React.FC<AriaChatProps> = ({
  messages,
  onSendMessage,
  quickReplies = [],
  isTyping = false,
  isExpanded = false,
  onToggleExpand
}) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim() && !isTyping) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <AriaOrb size="sm" />
        <div className="flex-1">
          <h3 className="font-semibold text-white">ARIA</h3>
          <p className="text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {isTyping ? 'Thinking...' : 'Active'}
          </p>
        </div>
        {onToggleExpand && (
          <button
            onClick={onToggleExpand}
            title={isExpanded ? 'Collapse panel' : 'Expand panel'}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {message.role === 'aria' && <AriaOrb size="sm" animated={false} />}
            <div
              className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                message.role === 'user'
                  ? 'bg-[#2563EB] text-white'
                  : 'glass-card text-white border-l-2 border-[#06B6D4]'
              }`}
            >
              {message.role === 'aria' ? (
                <AriaMarkdown content={message.content} />
              ) : (
                <p className="text-sm leading-relaxed">{message.content}</p>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <AriaOrb size="sm" animated={true} />
            <div className="glass-card rounded-2xl px-4 py-3 border-l-2 border-[#06B6D4]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {quickReplies.length > 0 && !isTyping && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => onSendMessage(reply)}
              className="px-3 py-1 text-xs rounded-full glass-card hover:bg-white/10 transition-all text-white/80 hover:text-white"
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask ARIA..."
            disabled={isTyping}
            className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 disabled:opacity-50"
          />
          <Button
            size="icon"
            variant="ghost"
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
