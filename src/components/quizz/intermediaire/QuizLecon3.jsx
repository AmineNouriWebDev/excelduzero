import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon3, titleLecon3 } from '@/components/questions/intermediaire/questionsLecon3';

export default function QuizLecon3({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon3}
            title={titleLecon3}
            onResult={onResult} 
        />
    );
}