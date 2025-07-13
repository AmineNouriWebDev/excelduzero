import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon21, titleLecon21 } from '@/components/questions/debutant/questionsLecon21';

export default function QuizLecon21({ onResult }) {
    return (
        <QuizComponent 
            questions={questionsLecon21}
            title={titleLecon21}
            onResult={onResult} 
        />
    );
}