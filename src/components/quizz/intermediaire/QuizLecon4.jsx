import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon4, titleLecon4 } from '@/components/questions/intermediaire/questionsLecon4';

export default function QuizLecon4({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon4}
            title={titleLecon4}
            onResult={onResult} 
        />
    );
}