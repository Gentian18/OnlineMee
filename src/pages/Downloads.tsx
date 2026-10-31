import { Container, Title, Text, SimpleGrid, Card, Button, Group, ThemeIcon } from '@mantine/core';

const downloads = [
  {
    id: 1,
    title: 'Infographic: Digitale Inclusie in Cijfers',
    type: 'PDF Document',
    description: 'Een visueel overzicht van de laatste cijfers over digitale uitsluiting in Nederland. Ideaal voor op kantoor of in de klas.',
  },
  {
    id: 2,
    title: 'Whitepaper: B1-taal op het Web',
    type: 'PDF Document',
    description: 'Praktische tips en voorbeelden om jouw website zo te schrijven dat iedereen het begrijpt. Inclusief checklist.',
  },
  {
    id: 3,
    title: 'Lespakket: Bouw je eigen toegankelijke website',
    type: 'ZIP-bestand',
    description: 'Een compleet lespakket voor docenten om met studenten aan de slag te gaan met WCAG en semantische HTML.',
  }
];

export function Downloads() {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xs" ta="center">Downloads & Hulpmiddelen</Title>
      <Text c="dimmed" ta="center" mb="xl" maw={600} mx="auto">
        Gratis materialen om jezelf, je team of je studenten te helpen bij het creëren van een inclusiever internet.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {downloads.map((item) => (
          <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Section withBorder inheritPadding py="xs" mb="md">
              <Group>
                <ThemeIcon color="teal" variant="light" size="lg">
                  📄
                </ThemeIcon>
                <Text fw={500}>{item.type}</Text>
              </Group>
            </Card.Section>
            
            <Title order={3} size="h4" mb="sm">{item.title}</Title>
            <Text size="sm" c="dimmed" mb="xl" style={{ flexGrow: 1 }}>
              {item.description}
            </Text>
            
            <Button 
              color="teal" 
              variant="light" 
              fullWidth 
              component="a" 
              href="#" 
              download
              onClick={(e) => {
                e.preventDefault();
                alert('In een echte applicatie zou hier het bestand gedownload worden.');
              }}
            >
              Download bestand
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}