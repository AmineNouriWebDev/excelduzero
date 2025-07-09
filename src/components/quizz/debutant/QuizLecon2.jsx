import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon2, titleLecon2 } from '@/components/questions/debutant/questionsLecon2';

export default function QuizLecon2({ onResult }) {
	return (
		<QuizComponent 
			questions={questionsLecon2}
			title={titleLecon2}
			onResult={onResult} 
		/>
	);
}