import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon8, titleLecon8 } from '@/components/questions/intermediaire/questionsLecon8';

export default function QuizLecon8({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon8}
            title={titleLecon8}
            onResult={onResult} 
        />
    );
}