import { useState, useMemo } from 'react';
import { 
  Container, Title, Text, TextInput, Select, SimpleGrid, Card, Badge, Group, Accordion, Loader, Alert 
} from '@mantine/core';
import { useKnowledgeItems } from '../hooks/useKnowledgeItems';

export function Kennisbank() {
  const { data: items, isLoading, isError } = useKnowledgeItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (!items) return [];
    return items.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category ? item.category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, category]);

  const categories = items ? Array.from(new Set(items.map((item) => item.category))) : [];

  if (isLoading) {
    return (
      <Container size="xl" py="xl" ta="center">
        <Loader color="teal" size="lg" />
        <Text mt="md">Kennisbank aan het laden...</Text>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container size="xl" py="xl">
        <Alert color="red" title="Fout">Er ging iets mis bij het laden van de kennisbank.</Alert>
      </Container>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xs" ta="center">Kennisbank</Title>
      <Text c="dimmed" mb="xl" ta="center">
        Ontdek onze artikelen en tips over digitale inclusie.
      </Text>

      {/* Zoek- en filterbalk */}
      <Group mb="xl" align="flex-end" justify="center">
        <TextInput
          label="Zoeken"
          placeholder="Typ een zoekterm..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          style={{ flex: 1, maxWidth: '400px' }}
        />
        <Select
          label="Categorie"
          placeholder="Alle categorieën"
          data={categories}
          value={category}
          onChange={setCategory}
          clearable
          w={250}
        />
      </Group>

      <div aria-live="polite" style={{ marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>
        {filteredItems.length} {filteredItems.length === 1 ? 'artikel' : 'artikelen'} gevonden
      </div>

      {filteredItems.length === 0 ? (
        <Text ta="center">Geen resultaten gevonden voor jouw zoekopdracht.</Text>
      ) : (
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {filteredItems.map((item) => (
            <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Title order={3} size="h4">{item.title}</Title>
                <Badge color="teal" variant="light">{item.category}</Badge>
              </Group>
              <Text size="sm" c="dimmed" mb="md">{item.summary}</Text>
              
              <Accordion variant="contained" radius="md">
                <Accordion.Item value="details">
                  <Accordion.Control>Lees meer</Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm" mb="md">{item.content}</Text>
                    <Text size="xs" c="dimmed">
                      Bron: <a href={item.source} target="_blank" rel="noreferrer" style={{ color: 'var(--mantine-color-teal-6)' }}>{item.source}</a>
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}