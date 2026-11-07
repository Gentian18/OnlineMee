import { Container, Title, Text, SimpleGrid, Card, Badge, Group } from '@mantine/core';

const nieuwsItems = [
  {
    id: 1,
    date: '12 oktober 2026',
    title: 'Nieuwe richtlijnen voor toegankelijke overheidswebsites',
    category: 'Wetgeving',
    excerpt: 'Vanaf volgend jaar moeten alle overheidswebsites voldoen aan strengere Europese eisen. Dit betekent grote stappen op het gebied van digitale inclusie.',
  },
  {
    id: 2,
    date: '5 oktober 2026',
    title: 'Online Mee start cursus voor senioren in samenwerking met bibliotheken',
    category: 'Projecten',
    excerpt: 'In 45 bibliotheken door heel Nederland starten we met wekelijkse inloopuren waar senioren gratis hulp krijgen bij hun digitale vragen.',
  },
  {
    id: 3,
    date: '28 september 2026',
    title: 'Waarom B1-taal de standaard zou moeten zijn',
    category: 'Kennis',
    excerpt: 'Uit nieuw onderzoek blijkt dat 70% van de Nederlanders moeite heeft met complexe teksten op websites. Simpeler schrijven helpt ons allemaal.',
  },
  {
    id: 4,
    date: '15 september 2026',
    title: 'Terugblik: De Week van de Digitale Toegankelijkheid',
    category: 'Evenementen',
    excerpt: 'Duizenden mensen deden mee aan onze quiz en webinars. Samen hebben we weer meer bewustzijn gecreëerd voor digitale drempels.',
  }
];

export function Nieuws() {
  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xs" ta="center">Nieuws & Actualiteiten</Title>
      <Text c="gray.7" ta="center" mb="xl" maw={600} mx="auto">
        Blijf op de hoogte van de laatste ontwikkelingen rondom digitale inclusie en onze projecten.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {nieuwsItems.map((item) => (
          <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Badge color="teal.9" variant="filled"/>
              <Text size="sm" c="gray.7">{item.date}</Text>
            </Group>
            <Title order={3} size="h4" mb="sm">{item.title}</Title>
            <Text size="sm" c="gray.7">
              {item.excerpt}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}