// TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("TodoList component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(2);

        test("adds a new todo", () => {
            render(<TodoList />);
            const input = screen.getByRole("textbox");
            const button = screen.getByRole("button", { name: "Add Todo" });

            userEvent.type(input, "Test Todo");
            userEvent.click(button);

            const todoItems = screen.getAllByRole("listitem");
            expect(todoItems).toHaveLength(3);
            expect(todoItems[2]).toHaveTextContent("Test Todo");
        });

        test("toggles completion of a todo", () => {
            render(<TodoList />);
            const firstTodo = screen.getByText(/todo 1/i);
            const checkbox = firstTodo.querySelector('input[type="checkbox"]');

            expect(checkbox).not.toBeChecked();

            fireEvent.click(checkbox);

            expect(checkbox).toBeChecked();
            expect(firstTodo).toHaveClass("completed");
        });

        test("deletes a todo", () => {
            render(<TodoList />);
            const firstTodo = screen.getByText(/todo 1/i);
            const deleteButton = firstTodo.querySelector("button");

            expect(screen.getAllByRole("listitem")).toHaveLength(2);

            fireEvent.click(deleteButton);

            expect(screen.queryByText(/todo 1/i)).toBeNull();
            expect(screen.getAllByRole("listitem")).toHaveLength(1);
        });

    })
})
