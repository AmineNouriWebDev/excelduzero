import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon17, titleLecon17 } from '@/components/questions/intermediaire/questionsLecon17';

export default function QuizLecon17({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon17}
            title={titleLecon17}
            onResult={onResult} 
        />
    );
}