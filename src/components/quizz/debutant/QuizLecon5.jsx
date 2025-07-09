import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon5, titleLecon5 } from '@/components/questions/debutant/questionsLecon5';

export default function QuizLecon5({ onResult }) {
	return (
		<QuizComponent 
			questions={questionsLecon5}
			title={titleLecon5}
			onResult={onResult} 
		/>
	);
}