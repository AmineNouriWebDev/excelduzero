import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon23, titleLecon23 } from '@/components/questions/debutant/questionsLecon23';

export default function QuizLecon23({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon23}
            title={titleLecon23}
            onResult={onResult} 
        />
    );
}