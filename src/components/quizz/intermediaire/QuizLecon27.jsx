import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon27, titleLecon27 } from '@/components/questions/intermediaire/questionsLecon27';

export default function QuizLecon27({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon27}
            title={titleLecon27}
            onResult={onResult} 
        />
    );
}