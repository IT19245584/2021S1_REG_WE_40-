import ContactUs from "../../components/LandingPage/ContactUs/ContactBody"
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test("Should render contact us component correctly", () => {
  render(<ContactUs />)
  const contactUsElement = screen.getByTestId("contact-1")
  expect(contactUsElement).toBeInTheDocument()
  expect(contactUsElement).toHaveTextContent("Contact Us for More Details")
  expect(contactUsElement).toHaveTextContent("SLIIT, New Kandy Road, Malabe, Sri Lanka")
})

describe("<ContactUs/>", () => {
  test("Render email input correctly", () => {
    render(<ContactUs />)
    const inputElement = screen.getByTestId("email-input")
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute("type", "email")
  })

  test("Passing a valid email address to email input field", () => {
    render(<ContactUs />)
    const inputElement = screen.getByTestId("email-input")
    userEvent.type(inputElement, "testing@gmail.com")
    expect(screen.getByTestId("email-input")).toHaveValue("testing@gmail.com")
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()
  })

  test("Getting error message when passing invalid email to input value", () => {
    render(<ContactUs />)
    const inputElement = screen.getByTestId("email-input")
    userEvent.type(inputElement, "test")
    expect(screen.getByTestId("email-input")).toHaveValue("test")
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument()
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.")
  })
})
