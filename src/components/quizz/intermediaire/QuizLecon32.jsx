import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon32, titleLecon32 } from '@/components/questions/intermediaire/questionsLecon32';

export default function QuizLecon32({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon32}
            title={titleLecon32}
            onResult={onResult} 
        />
    );
}