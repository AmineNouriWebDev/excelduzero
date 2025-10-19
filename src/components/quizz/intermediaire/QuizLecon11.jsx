import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon11, titleLecon11 } from '@/components/questions/intermediaire/questionsLecon11';

export default function QuizLecon11({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon11}
            title={titleLecon11}
            onResult={onResult} 
        />
    );
}