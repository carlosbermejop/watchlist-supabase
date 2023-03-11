import { MantineProvider, Text } from '@mantine/core';

export function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text id="main-text">Welcome to Mantine!</Text>
    </MantineProvider>
  );
}