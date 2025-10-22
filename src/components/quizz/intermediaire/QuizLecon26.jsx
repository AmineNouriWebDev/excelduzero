import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon26, titleLecon26 } from '@/components/questions/intermediaire/questionsLecon26';

export default function QuizLecon26({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon26}
            title={titleLecon26}
            onResult={onResult} 
        />
    );
}