import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon33, titleLecon33 } from '@/components/questions/intermediaire/questionsLecon33';

export default function QuizLecon33({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon33}
            title={titleLecon33}
            onResult={onResult} 
        />
    );
}