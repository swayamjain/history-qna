import { useState } from 'react'
import { BookOpen, CalendarDays, History } from 'lucide-react'
import QuestionCard from './QuestionCard'
import './App.css'
import qnaData from './qna_data.json'

function App() {
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0)

  const activePaper = qnaData[selectedPaperIndex]

  const getIcon = (title) => {
    if (title.includes('Predictive')) return <BookOpen size={20} />
    if (title.includes('Summer')) return <CalendarDays size={20} />
    return <History size={20} />
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <BookOpen size={28} color="#818cf8" />
          <h1>History Q&A Vault</h1>
          <h1>CC Swayam Jain</h1>
        </div>

        <nav className="nav-links">
          {qnaData.map((paper, index) => (
            <button
              key={index}
              onClick={() => setSelectedPaperIndex(index)}
              className={`nav-item ${selectedPaperIndex === index ? 'active' : ''}`}
            >
              {getIcon(paper.title)}
              {paper.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="paper-header">
          <h2>{activePaper.title}</h2>
          <p>Click on any question below to reveal the detailed answer.</p>
        </header>

        <div className="questions-list">
          {activePaper.questions.map((q, idx) => (
            <QuestionCard
              key={idx}
              question={q.question}
              answer={q.answer}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
