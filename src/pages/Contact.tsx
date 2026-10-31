import { useState } from 'react';
import { 
  Container, Title, Text, TextInput, Textarea, Button, Paper, Alert, Stack, Box 
} from '@mantine/core';
import { useForm } from '@mantine/form';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      // Dit is de honeypot. Echte gebruikers zien dit niet.
      website: '', 
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Vul alsjeblieft je naam in.' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Vul een geldig e-mailadres in.'),
      message: (value) => (value.trim().length < 10 ? 'Je bericht moet minimaal 10 tekens bevatten.' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // 1. Check de Honeypot (Spamfilter)
    // Als een bot dit invult, doen we alsof het gelukt is, maar sturen we niks.
    if (values.website.length > 0) {
      setIsSubmitted(true);
      setIsError(false);
      form.reset();
      return;
    }

    // 2. Als de honeypot leeg is, is het een echte gebruiker.
    // (In een echte app zou je hier een API call doen, nu simuleren we het).
    console.log('Formulier succesvol verzonden:', values);
    
    setIsSubmitted(true);
    setIsError(false);
    form.reset();
  };

  return (
    <Container size="sm" py="xl">
      <Title order={1} mb="xs" ta="center">Contact & Actie</Title>
      <Text c="dimmed" ta="center" mb="xl">
        Heb je een vraag, of wil je je aanmelden als vrijwilliger? Laat een bericht achter!
      </Text>

      {isSubmitted && (
        <Alert color="teal" title="Bericht verzonden!" mb="lg" role="status">
          Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
        </Alert>
      )}

      {isError && (
        <Alert color="red" title="Fout" mb="lg">
          Er ging iets mis bij het verzenden. Probeer het later opnieuw.
        </Alert>
      )}

      <Paper withBorder p="xl" radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              withAsterisk
              label="Naam"
              placeholder="Jouw naam"
              {...form.getInputProps('name')}
              aria-required="true"
            />

            <TextInput
              withAsterisk
              label="E-mailadres"
              placeholder="jouw@email.nl"
              {...form.getInputProps('email')}
              aria-required="true"
            />

            <Textarea
              withAsterisk
              label="Bericht"
              placeholder="Waar kunnen we je mee helpen?"
              minRows={4}
              {...form.getInputProps('message')}
              aria-required="true"
            />

            {/* 
              HONEYPOT VELD 
              Dit veld is onzichtbaar voor mensen (via CSS), maar wordt 
              door domme spambots automatisch ingevuld.
            */}
            <Box style={{ display: 'none' }} aria-hidden="true">
              <TextInput
                label="Laat dit veld leeg"
                tabIndex={-1}
                autoComplete="off"
                {...form.getInputProps('website')}
              />
            </Box>

            <Button type="submit" color="teal" size="md" mt="md">
              Verstuur bericht
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}