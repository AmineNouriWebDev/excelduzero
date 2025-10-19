import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon1, titleLecon1 } from '@/components/questions/intermediaire/questionsLecon1';

export default function QuizLecon1({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon1}
            title={titleLecon1}
            onResult={onResult} 
        />
    );
}