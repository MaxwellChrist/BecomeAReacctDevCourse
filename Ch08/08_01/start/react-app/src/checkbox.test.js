import { Checkbox } from "./checkbox";
import { render, fireEvent } from "@testing-library/react"

test("Selecting checkbox should change value of checked", () => {
    const {getByLabelText} = render(<Checkbox />)
    const checkbox = getByLabelText(/not checked/i)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
})