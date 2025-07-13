import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon22, titleLecon22 } from '@/components/questions/debutant/questionsLecon22';

export default function QuizLecon22({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon22}
            title={titleLecon22}
            onResult={onResult} 
        />
    );
}