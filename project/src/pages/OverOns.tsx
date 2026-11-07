import { Container, Title, Text, Paper, Grid, Stack, Accordion, List, Anchor, Group, Box } from '@mantine/core';

export function OverOns() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xs" ta="center">Over Ons & Transparantie</Title>
      <Text c="gray.7" ta="center" mb="xl">
        Wij geloven in een wereld waar niemand wordt buitengesloten door technologie.
      </Text>

      <Grid gap="xl">
        {/* Linkerkolom: Info en Contact */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg">
            <Paper withBorder p="lg" radius="md">
              <Title order={3} mb="sm">Onze Missie</Title>
              <Text size="sm" mb="md">
                Online Mee is een non-profit organisatie die zich inzet voor digitale inclusie. 
                Wij bieden gratis educatie, hulpmiddelen en een luisterend oor voor iedereen 
                die moeite heeft met de digitale samenleving.
              </Text>
            </Paper>

            <Paper withBorder p="lg" radius="md">
              <Title order={3} mb="sm">Contactgegevens</Title>
              <List spacing="xs" size="sm">
                <List.Item><strong>Adres:</strong> Digitaal Plein 1, 1000 AB Amsterdam</List.Item>
                <List.Item><strong>E-mail:</strong> <Anchor href="mailto:info@onlinemee.nl" c="teal.9">info@onlinemee.nl</Anchor></List.Item>
                <List.Item><strong>Telefoon:</strong> 020 - 123 45 67 (Ma-Vr, 9:00 - 17:00)</List.Item>
                <List.Item><strong>KBO-nummer:</strong> 12345678</List.Item>
              </List>
            </Paper>
          </Stack>
        </Grid.Col>

        {/* Rechterkolom: Juridisch & Transparantie */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper withBorder p="lg" radius="md" h="100%">
            <Title order={3} mb="md">Transparantie & Privacy</Title>
            <Accordion variant="separated">
              <Accordion.Item value="privacy">
                <Accordion.Control>Privacyverklaring (AVG)</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Wij verwerken persoonsgegevens strikt volgens de Algemene Verordening Gegevensbescherming (AVG). 
                    Gegevens die je via ons contactformulier achterlaat, worden alleen gebruikt om je vraag te beantwoorden. 
                    We verkopen nooit data aan derden en bewaren je gegevens niet langer dan noodzakelijk.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="financieel">
                <Accordion.Control>Financiële Verantwoording</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Online Mee is een ANBI-geregistreerde instelling. Ons meest recente jaarverslag (2025) is openbaar. 
                    Van elke euro die wij ontvangen, gaat 85% direct naar onze projecten en educatie. 
                    De overige 15% gebruiken we voor administratie en technisch onderhoud van deze website.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="toegankelijkheid">
                <Accordion.Control>Toegankelijkheidsverklaring</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Deze website is ontworpen met WCAG 2.1 AA als richtlijn. Dit betekent dat we letten op kleurcontrast, 
                    toetsenbordnavigatie en semantische HTML. Vind je toch een drempel op onze site? Laat het ons weten via het contactformulier!
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>
        </Grid.Col>
      </Grid>
      
      {/* Team sectie (optioneel, maar leuk voor de sfeer) */}
      <Box mt="xl">
        <Title order={3} mb="md" ta="center">Ons Team</Title>
        <Text ta="center" size="sm" c="gray.7">
          Een team van gepassioneerde developers, docenten en vrijwilligers zet zich dagelijks in voor dit platform.
        </Text>
      </Box>
    </Container>
  );
}