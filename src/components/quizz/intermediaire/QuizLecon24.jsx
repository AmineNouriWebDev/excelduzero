import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon24, titleLecon24 } from '@/components/questions/intermediaire/questionsLecon24';

export default function QuizLecon24({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon24}
            title={titleLecon24}
            onResult={onResult} 
        />
    );
}