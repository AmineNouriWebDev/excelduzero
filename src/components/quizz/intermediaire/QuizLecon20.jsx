import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon20, titleLecon20 } from '@/components/questions/intermediaire/questionsLecon20';

export default function QuizLecon20({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon20}
            title={titleLecon20}
            onResult={onResult} 
        />
    );
}