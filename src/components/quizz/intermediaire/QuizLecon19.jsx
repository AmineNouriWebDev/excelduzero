import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon19, titleLecon19 } from '@/components/questions/intermediaire/questionsLecon19';

export default function QuizLecon19({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon19}
            title={titleLecon19}
            onResult={onResult} 
        />
    );
}