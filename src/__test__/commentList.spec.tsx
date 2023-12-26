import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import CommentList from "../components/commentList";

test("Render the CommentList Component", () => {
  render(<CommentList />);
  expect(true).toBe(true);
});

test("CommentList display only 3 comments", () => {
  render(<CommentList />);
  const listComment = screen.getAllByLabelText("comment");

  expect(listComment).toHaveLength(3);
});

test("CommentList display all comments", () => {
  render(<CommentList />);
  const btnComments = screen.getByLabelText("commentList-btn");
  act(()=> {
    btnComments.click();
  })
  const listComment = screen.getAllByLabelText("comment");

  expect(listComment).toHaveLength(6);
});
