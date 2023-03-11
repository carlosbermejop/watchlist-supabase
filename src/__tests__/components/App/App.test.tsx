import { render, screen } from "@testing-library/react";
import { App } from "../../../components/App";
import React from "react";

test("renders learn react link", () => {
    render(<App />);
    expect(screen.getByText("Welcome to Mantine!")).toBeInTheDocument();
});
