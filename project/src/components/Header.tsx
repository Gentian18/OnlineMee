import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ActionIcon, Burger, Drawer, Group, NavLink, Stack, Title, useMantineColorScheme, Container, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTheme } from '../contexts/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/kennisbank', label: 'Kennisbank' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/contact', label: 'Contact' },
  { to: '/over-ons', label: 'Over Ons' },
  { to: '/nieuws', label: 'Nieuws' },
  { to: '/downloads', label: 'Downloads' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { theme, toggleTheme } = useTheme();
  const { setColorScheme } = useMantineColorScheme();
  const location = useLocation();

  const handleThemeToggle = () => {
    toggleTheme();
    setColorScheme(theme === 'light' ? 'dark' : 'light');
  };

     const navItems = links.map((link) => {
    const isActive = location.pathname === link.to;
    return (
      <NavLink
        key={link.to}
        component={RouterNavLink}
        to={link.to}
        label={link.label}
        onClick={close}
        active={isActive}
        style={{
          width: 'auto',
          borderRadius: '8px',
          // Forceer de donkere achtergrond als de link actief is
          ...(isActive ? { backgroundColor: 'var(--mantine-color-teal-9)' } : {}),
        }}
        styles={{
          // Forceer witte tekst als de link actief is
          label: { color: isActive ? 'white' : 'inherit' },
        }}
      />
    );
  });

  return (
    <>
      <Box h="100%" style={{ borderBottom: '1px solid var(--mantine-color-default-border)', backgroundColor: 'var(--mantine-color-body)' }}>
        {/* De Container centreert de inhoud en geeft het een max-breedte */}
        <Container size="xl" h="100%" px="md">
          <Group h="100%" justify="space-between">
            <Title order={3} c="teal.7">Online Mee</Title>

            <Group visibleFrom="sm" gap="xs">
              {navItems}
              <ActionIcon onClick={handleThemeToggle} variant="light" color="teal" size="lg" aria-label="Wissel thema" ml="sm">
                {theme === 'light' ? '🌙' : '☀️'}
              </ActionIcon>
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Open menu" />
          </Group>
        </Container>
      </Box>

      <Drawer opened={opened} onClose={close} title="Menu" hiddenFrom="sm" size="xs">
        <Stack gap="xs">
          {navItems}
          <ActionIcon onClick={handleThemeToggle} variant="light" color="teal" size="lg" aria-label="Wissel thema" mt="md">
            {theme === 'light' ? '🌙' : '☀️'}
          </ActionIcon>
        </Stack>
      </Drawer>
    </>
  );
}