import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon14, titleLecon14 } from '@/components/questions/intermediaire/questionsLecon14';

export default function QuizLecon14({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon14}
            title={titleLecon14}
            onResult={onResult} 
        />
    );
}