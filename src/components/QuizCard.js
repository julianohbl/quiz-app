import { useState } from "react";
import { questions } from "../questions";
import "../styles.css";

const getRandomQuestion = () => {
  // Escolhe uma pergunta aleatória
  const randomIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomIndex];

  // Retorna um novo objeto com as opções embaralhadas
  return {
    ...selectedQuestion,
    options: [...selectedQuestion.options].sort(() => Math.random() - 0.5),
  };
};

export default function QuizCard() {
  const [question, setQuestion] = useState(getRandomQuestion());
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (optionId) => {
    setSelectedAnswers((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleConfirm = () => {
    const correctAnswers = question.options
      .filter((opt) => opt.correct)
      .map((opt) => opt.id);
    const isAnswerCorrect =
      correctAnswers.length === selectedAnswers.length &&
      selectedAnswers.every((ans) => correctAnswers.includes(ans));

    setIsCorrect(isAnswerCorrect);
    setAnswered(true);
  };

  const handleNewQuestion = () => {
    setQuestion(getRandomQuestion());
    setSelectedAnswers([]);
    setAnswered(false);
  };

  // Filtra as opções corretas para exibição
  const correctOptions = question.options.filter((opt) => opt.correct);

  return (
    <div className="quiz-card">
      {!answered ? (
        <>
          <h2>{question.question}</h2>
          <div className="options">
            {question.options.map((opt) => (
              <label key={opt.id}>
                <input
                  type="checkbox"
                  checked={selectedAnswers.includes(opt.id)}
                  onChange={() => handleSelect(opt.id)}
                />
                {opt.text}
              </label>
            ))}
          </div>
          <button
            onClick={handleConfirm}
            disabled={selectedAnswers.length === 0}
          >
            Confirmar Resposta
          </button>
        </>
      ) : (
        <>
          <h2>{isCorrect ? "✅ Resposta Correta!" : "❌ Resposta Errada!"}</h2>
          {/* Exibe as respostas corretas */}
          <div className="correct-answers">
            <p>Resposta(s) correta(s):</p>
            <ul>
              {correctOptions.map((opt) => (
                <li key={opt.id}>{opt.text}</li>
              ))}
            </ul>
          </div>
          <p>{question.explanation}</p>
          <button onClick={handleNewQuestion}>Gerar Nova Pergunta</button>
        </>
      )}
    </div>
  );
}
