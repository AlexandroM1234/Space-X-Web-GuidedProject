import React from "react";
import { render } from "@testing-library/react";
import MissionsList from "./MissionsList";

test("renders without erros", () => {
  // arrange, act, assert all at once
  const {} = render(<MissionsList missions={[]} errors="" />);
});

test("renders error message if error is present", () => {
  // arrange, act, assert all at once
  const { queryByTestId, rerender } = render(
    <MissionsList missions={[]} error="" />
  );

  // assert that no error message is rendered
  // query for the element (Should return null)
  // assert with .toBeNull()
  expect(queryByTestId(/error-message/i)).toBeNull();

  // rerender the component with new props (errors)
  rerender(<MissionsList missions={[]} error="some error message" />);

  // asseer that the error message is rendered
  expect(queryByTestId(/error-message/i)).toBeInTheDocument();
});
