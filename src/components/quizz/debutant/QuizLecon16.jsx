import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon16, titleLecon16 } from '@/components/questions/debutant/questionsLecon16';

export default function QuizLecon16({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon16}
            title={titleLecon16}
            onResult={onResult} 
        />
    );
}