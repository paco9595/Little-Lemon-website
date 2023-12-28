import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/bookingForm";

test("Should validate required fields", () => {
  render(<BookingForm />);

  userEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Full Name is required")).toBeInTheDocument();
  expect(screen.getByText("Email is required")).toBeInTheDocument();
  expect(screen.getByText("Number of Guests is required")).toBeInTheDocument();
  expect(screen.getByText("Date is required")).toBeInTheDocument();
  expect(screen.getByText("Hour is required")).toBeInTheDocument();
});

test("Should validate email format", () => {
  render(<BookingForm />);

  const emailInput = screen.getByLabelText("Email");
  userEvent.type(emailInput, "invalidemail");
  userEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Invalid email format")).toBeInTheDocument();
});

test("Should validate number of guests", () => {
  render(<BookingForm />);

  const numberOfGuestsInput = screen.getByLabelText("Number of Guests");
  userEvent.type(numberOfGuestsInput, "0");
  userEvent.click(screen.getByText("Submit"));

  expect(
    screen.getByText("Number of Guests must be greater than 0")
  ).toBeInTheDocument();
});

test("Should submit valid form", () => {
  const mockSubmit = jest.fn();
  render(<BookingForm/>);

  userEvent.type(screen.getByLabelText("Full Name"), "John Doe");
  userEvent.type(screen.getByLabelText("Email"), "johndoe@example.com");
  userEvent.type(screen.getByLabelText("Number of Guests"), "5");
  userEvent.selectOptions(screen.getByLabelText("Occasion"), ["Birthday"]);
  userEvent.type(screen.getByLabelText("Date"), "2024-12-25");
  userEvent.type(screen.getByLabelText("Hour"), "19:00");

  userEvent.click(screen.getByText("Submit"));

  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({
    fullName: "John Doe",
    mail: "johndoe@example.com",
    numberOfGuests: 5,
    date: "2024-12-25",
    hour: "19:00",
    occasion: "Birthday",
  });
});
