import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuContainer from "./index";

describe("MenuContainer component", () => {
  const data = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];

  const handleMenuClick = jest.fn();
  const getSelectedclassName = jest.fn();

  it("renders the menu items correctly", () => {
    const { getByText } = render(
      <MenuContainer
        data={data}
        handleMenuClick={handleMenuClick}
        getSelectedclassName={getSelectedclassName}
      />
    );

    data.forEach((item) => {
      const menuItem = getByText(item.value);
      expect(menuItem).toBeInTheDocument();
    });
  });

  it("calls the handleMenuClick function when a menu item is clicked", () => {
    const { getByText } = render(
      <MenuContainer
        data={data}
        handleMenuClick={handleMenuClick}
        getSelectedclassName={getSelectedclassName}
      />
    );

    const menuItem = getByText(data[0].value);
    fireEvent.click(menuItem);

    expect(handleMenuClick).toHaveBeenCalledTimes(1);
    expect(handleMenuClick).toHaveBeenCalledWith(data[0].id);
  });
});
