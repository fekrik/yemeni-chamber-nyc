export type Subject = 'ela' | 'math';

export type QuestionType = 'multiple_choice' | 'text_entry' | 'multi_select';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  text: string;
}

export interface Question {
  id: string;
  examId: string;
  section: Subject;
  questionNumber: number; // 1-50 for ELA, 51-100 for Math
  passageId?: string;
  type: QuestionType;
  prompt: string;
  imageSrc: string; // High-res official rendering
  options?: QuestionOption[] | null;
  correctAnswer: string; // e.g. 'B' or '4n - 12'
  topic: string;
  subtopic?: string;
  difficulty: Difficulty;
  hints: [string, string, string]; // 3-level progressive Socratic hints
  trapAlert: string; // Analysis of why students pick common incorrect choices
  explanation: string; // Comprehensive solution and breakdown
}

export interface Passage {
  id: string;
  examId: string;
  passageNumber: number;
  title: string;
  author?: string;
  intro?: string;
  text: string;
  paragraphs?: { number: number; text: string }[];
  startQuestion: number;
  endQuestion: number;
  genre: 'Informational' | 'Literature' | 'Poetry' | 'Historical' | 'RevisingPartA';
  imageSrc?: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  year: string;
  timeLimitMinutes: number; // 180 standard
  totalQuestions: number; // 100
  elaCount: number; // 50
  mathCount: number; // 50
  badge?: string;
}

export interface SpecializedHighSchool {
  id: string;
  name: string;
  shortName: string;
  borough: 'Manhattan' | 'Bronx' | 'Brooklyn' | 'Queens' | 'Staten Island';
  cutoffScore: number;
  seats: number;
  description: string;
  specialty: string;
  website: string;
  color: string;
}

export interface UserAnswerRecord {
  questionId: string;
  examId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  flagged: boolean;
  struckOptions: string[];
  timestamp: number;
}

export interface TopicDrill {
  id: string;
  subject: Subject;
  title: string;
  icon: string;
  description: string;
  questionCount: number;
  targetSkills: string[];
  sampleQuestionIds: string[];
}
