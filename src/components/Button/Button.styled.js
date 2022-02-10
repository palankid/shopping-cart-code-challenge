import styled from "styled-components";

import colors from "theme/colors";

import { VARIANTS } from "./Button";

export const ButtonStyled = styled.button`
  ${({ theme }) => theme?.typography?.bodySmall}
  min-width: 80px;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: ${({ variant }) =>
    ({
      [true]: "none",
      [variant ===
      VARIANTS.OUTLINED]: `inset 0 0 0 1px ${colors.GRAY_LIGHTEN_30}`,
    }.true)};
  color: ${({ variant, disabled }) =>
    ({
      [true]: colors.GRAY_LIGHTEN_100,
      [variant === VARIANTS.OUTLINED && !disabled]: colors.GRAY_DARKEN_10,
    }.true)};
  background-color: ${({ variant, disabled }) =>
    ({
      [variant === VARIANTS.PRIMARY]: colors.BLUE_LIGHTEN_10,
      [variant === VARIANTS.SECONDARY]: colors.GREEN_DARKEN_10,
      [variant === VARIANTS.TERTIARY]: colors.RED_DARKEN_10,
      [variant === VARIANTS.OUTLINED]: colors.GRAY_LIGHTEN_100,
      [disabled]: colors.GRAY_LIGHTEN_30,
    }.true)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ variant, disabled }) =>
      ({
        [variant === VARIANTS.PRIMARY]: colors.BLUE_DARKEN_10,
        [variant === VARIANTS.SECONDARY]: colors.GREEN_DARKEN_20,
        [variant === VARIANTS.TERTIARY]: colors.RED_DARKEN_20,
        [variant === VARIANTS.OUTLINED]: colors.GRAY_LIGHTEN_50,
        [disabled]: colors.GRAY_LIGHTEN_30,
      }.true)};
  }

  &:active {
    background-color: ${({ variant, disabled }) =>
      ({
        [variant === VARIANTS.PRIMARY]: colors.BLUE_DARKEN_20,
        [variant === VARIANTS.SECONDARY]: colors.GREEN_DARKEN_30,
        [variant === VARIANTS.TERTIARY]: colors.RED_DARKEN_30,
        [variant === VARIANTS.OUTLINED]: colors.GRAY_LIGHTEN_100,
        [disabled]: colors.GRAY_LIGHTEN_30,
      }.true)};
  }
`;
