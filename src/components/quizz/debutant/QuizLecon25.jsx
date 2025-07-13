import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon25, titleLecon25 } from '@/components/questions/debutant/questionsLecon25';

export default function QuizLecon25({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon25}
            title={titleLecon25}
            onResult={onResult} 
        />
    );
}