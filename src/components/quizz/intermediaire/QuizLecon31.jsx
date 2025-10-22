import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon31, titleLecon31 } from '@/components/questions/intermediaire/questionsLecon31';

export default function QuizLecon31({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon31}
            title={titleLecon31}
            onResult={onResult} 
        />
    );
}