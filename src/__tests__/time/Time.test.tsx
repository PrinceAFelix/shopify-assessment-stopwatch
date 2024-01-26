import { render, screen, within } from "@testing-library/react";
import Time from "../../components/common/time/Time";

const timeCase: TimeType = {
  milli: 0,
  second: 0,
  minute: 0,
  hour: 0,
};

test("render time component", async () => {
  const { getByTitle } = render(<Time time={timeCase} className="stopwatch" />);
  const divElement = getByTitle("time-holder");
  expect(within(divElement).getAllByRole("generic").length).toBe(4);
});
