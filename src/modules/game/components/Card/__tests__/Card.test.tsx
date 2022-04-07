import { render, screen } from "@testing-library/react";
import { Card } from "../Card";
import { LEVELS } from "modules/game/types";
import emptyImg from "assets/images/wall.jpg";
import image1 from "assets/images/1.jpg";

describe("should show image", () => {
  it("with default image ", () => {
    render(
      <Card
        id={1}
        turnedOff={false}
        onClick={() => {}}
        flipped={false}
        cardsAmount={16}
        selectedGameLevel={LEVELS.EASY}
      />
    );
    expect(screen.queryByTestId("card-image")).toBeInTheDocument();
    expect(screen.queryByTestId("card-image")).toHaveAttribute("src", emptyImg);
  });

  it("with proper id when flipped=true", () => {
    render(
      <Card
        id={1}
        turnedOff={false}
        onClick={() => {}}
        flipped
        cardsAmount={16}
        selectedGameLevel={LEVELS.EASY}
      />
    );
    expect(screen.queryByTestId("card-image")).toBeInTheDocument();
    expect(screen.queryByTestId("card-image")).toHaveAttribute("src", image1);
  });

  it("with opacity=0 when turned off and flipped", () => {
    render(
      <Card
        id={1}
        turnedOff={true}
        onClick={() => {}}
        flipped
        cardsAmount={16}
        selectedGameLevel={LEVELS.EASY}
      />
    );
    expect(screen.queryByTestId("card-image")).toBeInTheDocument();
    expect(screen.queryByTestId("card-image")).toHaveAttribute("src", image1);
    expect(screen.queryByTestId("card-image")).toHaveStyle("opacity: 0");
  });

  it("with opacity=0 when turned off and not flipped", () => {
    render(
      <Card
        id={1}
        turnedOff={true}
        onClick={() => {}}
        flipped={false}
        cardsAmount={16}
        selectedGameLevel={LEVELS.EASY}
      />
    );
    expect(screen.queryByTestId("card-image")).toBeInTheDocument();
    expect(screen.queryByTestId("card-image")).toHaveAttribute("src", emptyImg);
    expect(screen.queryByTestId("card-image")).toHaveStyle("opacity: 0");
  });
});
