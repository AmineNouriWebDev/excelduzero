import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon34, titleLecon34 } from '@/components/questions/intermediaire/questionsLecon34';

export default function QuizLecon34({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon34}
            title={titleLecon34}
            onResult={onResult} 
        />
    );
}