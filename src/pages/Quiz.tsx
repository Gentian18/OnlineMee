import { useState } from 'react';
import { 
  Container, Title, Text, Paper, Radio, Button, Progress, Alert, RingProgress, Stack, Group 
} from '@mantine/core';
import { useQuiz } from '../components/hooks/useQuiz';

export function Quiz() {
  const { data: questions, isLoading, isError } = useQuiz();
  
  // State voor de quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (isLoading) {
    return <Container size="sm" py="xl"><Text>Quiz aan het laden...</Text></Container>;
  }

  if (isError || !questions || questions.length === 0) {
    return <Container size="sm" py="xl"><Alert color="red">Er ging iets mis bij het laden van de quiz.</Alert></Container>;
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  const handleAnswer = () => {
    if (!selectedOption) return;
    
    setIsAnswered(true);
    if (parseInt(selectedOption) === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Als de quiz klaar is, toon het resultaat
  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Container size="sm" py="xl">
        <Paper withBorder p="xl" radius="md" ta="center">
          <Title order={2} mb="md">Quiz Afgerond!</Title>
          <RingProgress
            size={180}
            thickness={12}
            roundCaps
            sections={[{ value: percentage, color: percentage >= 60 ? 'teal' : 'red' }]}
            label={
              <Text c="teal.7" fw={700} ta="center" size="xl">
                {percentage}%
              </Text>
            }
            mx="auto"
            mb="xl"
          />
          <Text size="lg" mb="xl">
            Je hebt <strong>{score}</strong> van de <strong>{questions.length}</strong> vragen goed beantwoord.
          </Text>
          <Button onClick={restartQuiz} size="lg" color="teal">
            Probeer opnieuw
          </Button>
        </Paper>
      </Container>
    );
  }

  // De daadwerkelijke quizvraag
  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xs" ta="center">Test je Digitale Kennis</Title>
      <Text c="dimmed" ta="center" mb="xl">Hoeveel weet jij over digitale inclusie?</Text>

      <Progress value={progress} mb="xl" color="teal" size="lg" radius="xl" />

      <Paper withBorder p="xl" radius="md">
        <Text size="sm" c="dimmed" mb="xs">Vraag {currentQuestion + 1} van {questions.length}</Text>
        <Title order={3} mb="lg">{question.question}</Title>

        <Radio.Group
          value={selectedOption}
          onChange={setSelectedOption}
          name="quiz-options"
        >
          <Stack gap="md">
            {question.options.map((option, index) => (
              <Radio 
                key={index} 
                value={index.toString()} 
                label={option} 
                disabled={isAnswered} 
                size="md"
              />
            ))}
          </Stack>
        </Radio.Group>

        {isAnswered && (
          <Alert 
            mt="xl" 
            color={parseInt(selectedOption!) === question.correctIndex ? 'teal' : 'red'}
            title={parseInt(selectedOption!) === question.correctIndex ? 'Helemaal goed!' : 'Helaas, dat is niet juist.'}
          >
            {question.explanation}
          </Alert>
        )}

        <Group justify="flex-end" mt="xl">
          {!isAnswered ? (
            <Button onClick={handleAnswer} disabled={!selectedOption} color="teal" size="md">
              Antwoord geven
            </Button>
          ) : (
            <Button onClick={handleNext} color="teal" size="md">
              {currentQuestion === questions.length - 1 ? 'Bekijk resultaat' : 'Volgende vraag'}
            </Button>
          )}
        </Group>
      </Paper>
    </Container>
  );
}