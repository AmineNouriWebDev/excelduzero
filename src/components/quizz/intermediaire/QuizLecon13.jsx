import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon13, titleLecon13 } from '@/components/questions/intermediaire/questionsLecon13';

export default function QuizLecon13({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon13}
            title={titleLecon13}
            onResult={onResult} 
        />
    );
}