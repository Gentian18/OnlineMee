import { Container, Text } from '@mantine/core';

export function Footer() {
  return (
    <Container size="xl" h="100%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text size="sm" c="gray.7">
        © {new Date().getFullYear()} Online Mee — Een maatschappelijk platform voor digitale inclusie.
      </Text>
    </Container>
  );
}