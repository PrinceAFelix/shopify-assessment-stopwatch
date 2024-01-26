import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import StopWatch from "../../components/main/StopWatch";
import React from "react";

test("start stopwatch timer", async () => {
  render(<StopWatch />);
  userEvent.click(screen.getByText("Start"));
  expect(screen.getAllByRole("button").at(0)).toHaveTextContent("Stop");
  expect(screen.getAllByRole("button").at(1)).toHaveTextContent("Lap");
  userEvent.click(screen.getByText("Stop"));
  expect(screen.getAllByRole("button").at(0)).toHaveTextContent("Start");
  expect(screen.getAllByRole("button").at(1)).toHaveTextContent("Reset");
});

test("append laps on click", async () => {
  render(<StopWatch />);
  userEvent.click(screen.getByText("Start"));
  expect(screen.getAllByRole("button").at(0)).toHaveTextContent("Stop");
  expect(screen.getAllByRole("button").at(1)).toHaveTextContent("Lap");

  for (let i = 0; i < 10; i++) {
    userEvent.click(screen.getByText("Lap"));
    expect(screen.getByText("Lap " + (i + 1))).toBeInTheDocument();
  }
});

test("waits 5 seonds to display 5 seonds on the stopwatch", async () => {
  jest.useFakeTimers();

  render(<StopWatch />);
  userEvent.click(screen.getByText("Start"));
  expect(screen.getAllByRole("button").at(0)).toHaveTextContent("Stop");
  expect(screen.getAllByRole("button").at(1)).toHaveTextContent("Lap");

  act(() => {
    jest.advanceTimersByTime(5000);
  });

  expect(screen.getByText("05:")).toBeInTheDocument();

  jest.useRealTimers();
});
