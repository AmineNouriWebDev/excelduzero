import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon15, titleLecon15 } from '@/components/questions/intermediaire/questionsLecon15';

export default function QuizLecon15({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon15}
            title={titleLecon15}
            onResult={onResult} 
        />
    );
}