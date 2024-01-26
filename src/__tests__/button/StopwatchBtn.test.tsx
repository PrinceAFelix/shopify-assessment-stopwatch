import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import StopWatchBtn from "../../components/common/button/StopWatchBtn";

const buttonCases = [
  {
    btnType: { label: "Start", isActive: true },
    onButtonClick: () => {},
    className: "Start",
    name: "Start",
  },
  {
    btnType: { label: "Stop", isActive: true },
    onButtonClick: () => {},
    className: "Stop",
    name: "Stop",
  },
  {
    btnType: { label: "Lap", isActive: true },
    onButtonClick: () => {},
    className: "Lap",
    name: "Lap",
  },
  {
    btnType: { label: "Reset", isActive: true },
    onButtonClick: () => {},
    className: "Reset",
    name: "Reset",
  },
];

buttonCases.forEach((btn) => {
  test("renders stopwatch button", async () => {
    render(
      <StopWatchBtn
        btnType={btn.btnType}
        onButtonClick={btn.onButtonClick}
        className={btn.className}
        name={btn.name}
      />
    );

    expect(screen.getByText(btn.name)).toBeInTheDocument;
  });
});
