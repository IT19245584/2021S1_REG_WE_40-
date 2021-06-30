import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import PastProceeding from "../../components/Admin/Editor/PastProceeding/AddPastProceeding"

test("Should render Add Past Proceeding component correctly", () => {
  render(<PastProceeding />)
  const contactUsElement = screen.getByTestId("past-1")
  expect(contactUsElement).toBeInTheDocument()
})

describe("<PastProceeding/>", () => {
  test("Render image input correctly", () => {
    render(<PastProceeding />)
    const inputElement = screen.getByTestId("image-input")
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute("type", "file")
  })
})
