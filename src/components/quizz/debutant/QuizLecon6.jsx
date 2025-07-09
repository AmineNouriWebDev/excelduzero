import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon6, titleLecon6 } from '@/components/questions/debutant/questionsLecon6';

export default function QuizLecon6({ onResult }) {
	return (
		<QuizComponent 
			questions={questionsLecon6}
			title={titleLecon6}
			onResult={onResult} 
		/>
	);
}