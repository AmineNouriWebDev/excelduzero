import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon29, titleLecon29 } from '@/components/questions/intermediaire/questionsLecon29';

export default function QuizLecon29({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon29}
            title={titleLecon29}
            onResult={onResult} 
        />
    );
}