import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon10, titleLecon10 } from '@/components/questions/intermediaire/questionsLecon10';

export default function QuizLecon10({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon10}
            title={titleLecon10}
            onResult={onResult} 
        />
    );
}