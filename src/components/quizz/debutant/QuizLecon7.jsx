import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon7, titleLecon7 } from '@/components/questions/debutant/questionsLecon7';

export default function QuizLecon7({ onResult }) {
	return (
		<QuizComponent 
			questions={questionsLecon7}
			title={titleLecon7}
			onResult={onResult} 
		/>
	);
}