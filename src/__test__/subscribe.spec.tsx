import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Subscribe from "../components/subscribe";

test("Render the subscribe Component", () => {
  render(<Subscribe submit={() => {}} />);
  expect(true).toBe(true);
});

test("subscribe call the subscribe service", () => {
  const mockFunciton = jest.fn((_state: string) => {});
  render(<Subscribe submit={mockFunciton} />);
  const btn = screen.getByLabelText('subscribe-btn')
  btn.click();
  expect(mockFunciton.mock.calls).toHaveLength(1)
});
