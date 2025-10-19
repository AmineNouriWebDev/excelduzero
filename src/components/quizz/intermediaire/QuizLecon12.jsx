import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon12, titleLecon12 } from '@/components/questions/intermediaire/questionsLecon12';

export default function QuizLecon12({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon12}
            title={titleLecon12}
            onResult={onResult} 
        />
    );
}