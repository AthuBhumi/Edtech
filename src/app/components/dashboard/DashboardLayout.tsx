import React, { useState, ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { AriaChat, AriaChatMessage } from '../aria/AriaChat';
import { sendGroqMessage, DashboardRole, ChatMessage } from '../../services/groqService';

interface DashboardLayoutProps {
  role: DashboardRole;
  greeting: string;
  name: string;
  roleLabel: string;
  avatarUrl?: string;
  children: ReactNode;
  initialMessages?: AriaChatMessage[];
  quickReplies?: string[];
  onSendMessage?: (message: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  role,
  greeting,
  name,
  roleLabel,
  avatarUrl,
  children,
  initialMessages = [],
  quickReplies = [],
  onSendMessage
}) => {
  const [showChat, setShowChat] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  // Conversation history for Groq context (assistant format)
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);

  const [chatMessages, setChatMessages] = useState<AriaChatMessage[]>(
    initialMessages.length > 0 ? initialMessages : [
      {
        id: '1',
        role: 'aria',
        content: `Hi ${name}! I'm ARIA, your Academic Research & Intelligence Assistant. How can I help you today?`,
        timestamp: new Date()
      }
    ]
  );

  const defaultQuickReplies = quickReplies.length > 0 ? quickReplies : [
    'Show overview',
    'Any updates?',
    'Help me plan',
    'Show analytics'
  ];

  const handleSendMessage = async (message: string) => {
    // 1. Add user message to chat UI
    setChatMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date()
    }]);

    // 2. Notify parent if handler provided
    if (onSendMessage) {
      onSendMessage(message);
    }

    // 3. Show typing indicator
    setIsTyping(true);

    try {
      // 4. Call Groq API with conversation history
      const reply = await sendGroqMessage(message, conversationHistory, role);

      // 5. Update conversation history for context continuity
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]);

      // 6. Add Aria reply to chat
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'aria',
        content: reply,
        timestamp: new Date()
      }]);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error occurred.';
      console.error('ARIA chat error:', errorMsg);
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'aria',
        content: `⚠️ ${errorMsg}`,
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0F1E]">
      <Sidebar role={role} onAriaClick={() => setShowChat(!showChat)} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar 
            greeting={greeting}
            name={name}
            role={roleLabel}
            avatarUrl={avatarUrl}
          />

          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>

        {/* ARIA Chat Sidebar */}
        {showChat && (
          <div
            className={`flex flex-col bg-[#0A0F1E] border-l border-white/10 transition-all duration-300
              ${
                isExpanded
                  ? 'fixed inset-0 z-50 w-full lg:relative lg:inset-auto lg:w-[600px]'
                  : 'w-full lg:w-80 fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto'
              }
            `}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-14 z-10 w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              ✕
            </button>
            <AriaChat
              messages={chatMessages}
              onSendMessage={handleSendMessage}
              quickReplies={defaultQuickReplies}
              isTyping={isTyping}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(prev => !prev)}
            />
          </div>
        )}
      </div>
    </div>
  );
};