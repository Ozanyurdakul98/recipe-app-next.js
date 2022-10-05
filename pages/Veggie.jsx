import React from "react";
import { DetailPage } from "../components/DetailPage.jsx";
import Image from "next/image";
import styled from "styled-components";

export default function Veggie() {
  return (
    <StyledContainer>
      <Background>
        <Image
          src="https://unsplash.com/photos/v6KsaQtqINc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dmVnZ2llfGVufDB8fHx8MTY2NDk0NTUyNQ&force=true&w=2400"
          alt="Schöne Fische"
          layout="responsive"
          width={2400}
          height={3184}
        />
      </Background>
      <DetailPage style={{ marginTop: "40px" }}>
        <h1>Blueberry Muffin Cake</h1>
        <ul>
          <li>45 min (Total time)</li>
          <li>15 min (Prep time)</li>
          <li>9 servings</li>
        </ul>
        <p>
          Ingredients <br />
          cooking spray 1 cup blueberries <br />1 1/2 cups all-purpose flour,
          divided <br />
          1/2 cup white sugar <br />
          1/4 cup vegetable oil
          <br />
          1/2 cup milk <br />1 egg <br />1 teaspoon vanilla extract <br />3
          teaspoons baking powder <br />
          1/2 teaspoon salt <br />
          1/2 cup brown sugar <br />
          1/3 cup all-purpose flour
          <br /> 2 teaspoons cinnamon <br />
          1/4 cup butter
          <br />
          <br />
          Instructions Preheat the oven to 400 degrees F (200 degrees C). Spray
          an 8x8-inch baking pan with cooking spray. Toss blueberries and 1/2
          cup of flour in a small bowl until blueberries are coated. Set aside.
          Beat together sugar and oil with an electric mixer in a large bowl.
          Add milk, egg, and vanilla extract. Mix remaining 1 cup flour, baking
          powder, and salt in a small bowl. Add flour mixture to sugar mixture;
          mix until just combined. fold in blueberry mixture. Pour batter into
          the prepared baking pan. Mix together brown sugar, 1/3 cup flour, and
          cinnamon in a bowl. Cut in butter until topping mixture is crumbly.
          Sprinkle on top of the cake batter. Bake in the preheated oven until a
          toothpick inserted in the center comes out clean, about 30 minutes.
          Remove from oven and allow to cool before serving.
        </p>
      </DetailPage>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    margin-left: 40px;
    margin-bottom: 40px;
  }
`;

const Background = styled.div`
  width: 50%;
  height: 70%;
`;
