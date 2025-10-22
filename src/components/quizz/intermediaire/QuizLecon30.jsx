import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon30, titleLecon30 } from '@/components/questions/intermediaire/questionsLecon30';

export default function QuizLecon30({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon30}
            title={titleLecon30}
            onResult={onResult} 
        />
    );
}