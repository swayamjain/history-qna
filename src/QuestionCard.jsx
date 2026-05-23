import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronDown } from 'lucide-react';

export default function QuestionCard({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`question-card ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="question-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>{question}</h3>
        <div className="icon-container">
          <ChevronDown size={24} />
        </div>
      </div>
      
      {isExpanded && (
        <div className="answer-body">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
