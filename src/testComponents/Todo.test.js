import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

afterEach(()=>cleanup());

describe("Todo component is working correctly", () => {
  const todo = { id: 5, text: "Hacer la compra", completed: false };
  render(<Todo todo={todo} />);
  const todoelement = screen.getByTestId(`todo-test-${todo.id}`);
  const checkbox = todoelement.querySelector("#checkbox");

  it("should render Todo component", () => {
    expect(todoelement).toBeInTheDocument();
  });
  it("should have right text", () => {
    expect(todoelement).toHaveTextContent(todo.text);
  });

  const todo2 = { id: 12, text: "Hacer la compra", completed: true };
  render(<Todo todo={todo2} />);
  const todoelement2 = screen.getByTestId(`todo-test-${todo2.id}`);
  const checkbox2 = todoelement2.querySelector('#checkbox')
  it('should be checked', () => {
    expect(checkbox2).toBeChecked()
  });

  it('matches snapshot', () => {
    const snapTodo = { id: 1, text: "Pasar los test 2", completed: false }
    const tree = renderer.create(<todo todo={snapTodo} />)
    expect(tree).toMatchSnapshot()
  })
});
