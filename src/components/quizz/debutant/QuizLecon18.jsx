import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon18, titleLecon18 } from '@/components/questions/debutant/questionsLecon18';

export default function QuizLecon18({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon18}
            title={titleLecon18}
            onResult={onResult} 
        />
    );
}