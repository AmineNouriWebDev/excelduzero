import QuizComponent from '@/components/quizz/QuizComponent';
import { questionsLecon9, titleLecon9 } from '@/components/questions/debutant/questionsLecon9';

export default function QuizLecon9({ onResult }) {
	return (
		<QuizComponent 
			questions={questionsLecon9}
			title={titleLecon9}
			onResult={onResult} 
		/>
	);
}