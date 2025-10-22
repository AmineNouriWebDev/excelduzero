import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon28, titleLecon28 } from '@/components/questions/intermediaire/questionsLecon28';

export default function QuizLecon28({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon28}
            title={titleLecon28}
            onResult={onResult} 
        />
    );
}