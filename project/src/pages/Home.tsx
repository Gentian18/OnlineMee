import { Container, Title, Text, Button, Group, Paper, SimpleGrid, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Container size="xl" py="xl">
        <Paper radius="lg" p="xl" withBorder style={{ backgroundColor: 'var(--mantine-color-teal-0)' }}>
          <Stack align="center" gap="md" py="xl">
            <Title order={1} size="3rem" ta="center" c="teal.9">
              Het internet is voor iedereen.
            </Title>
            <Text size="xl" ta="center" maw={600}>
              Wij zorgen ervoor dat niemand wordt buitengesloten. Online Mee biedt uitleg, hulpmiddelen en een helpende hand voor wie digitaal vastloopt.
            </Text>
            <Group mt="md">
              <Button component={Link} to="/kennisbank" size="lg" color="teal.9">
                Ontdek de Kennisbank
              </Button>
              <Button component={Link} to="/quiz" size="lg" variant="outline" color="teal.9">
                Test je kennis
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>

      <Container size="xl" py="xl">
        <Title order={2} ta="center" mb="xl">Onze Impact</Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Paper withBorder p="xl" radius="md" ta="center">
            <Title order={3} c="teal.7" size="2.5rem">12.000+</Title>
            <Text c="gray.7">Mensen geholpen met digitale vragen</Text>
          </Paper>
          <Paper withBorder p="xl" radius="md" ta="center">
            <Title order={3} c="teal.7" size="2.5rem">45</Title>
            <Text c="gray.7">Aangesloten bibliotheken en buurthuizen</Text>
          </Paper>
          <Paper withBorder p="xl" radius="md" ta="center">
            <Title order={3} c="teal.7" size="2.5rem">98%</Title>
            <Text c="gray.7">Voelt zich zekerder online na onze cursus</Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </>
  );
}