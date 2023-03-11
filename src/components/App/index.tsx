import { MantineProvider, Text } from "@mantine/core";
import React from "react";

export function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Text id="main-text">Welcome to Mantine!</Text>
        </MantineProvider>
    );
}