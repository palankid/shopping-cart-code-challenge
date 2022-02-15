import React, { useState } from "react";
import classNames from "classnames";

import Button from "../Button";
import { clamp } from "../../utils/number.utils";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./NumericInput.module.css";
import { Icon } from "../Icon";

interface NumericInputType {
  value: number;
  min?: number;
  max?: number;
  inputWidth?: string;
  style?: React.CSSProperties;
  onInput: (value: number) => void;
}

const NumericInput = ({
  value,
  min = 1,
  max = 100,
  inputWidth,
  style,
  onInput,
  ...rest
}: NumericInputType) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [decreaseDisabled, setDecreaseDisabled] = useState(value <= min);
  const [increaseDisabled, setIncreaseDisabled] = useState(value >= max);

  const updateValue = (value: number) => {
    setCurrentValue(value);
    setDecreaseDisabled(value <= min);
    setIncreaseDisabled(value >= max);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const value = clamp(+event.currentTarget.value, min, max);

    updateValue(value);
    onInput(value);
  };

  const handleAdjustNumber = (num: number) => () => {
    const value = clamp(currentValue + num, min, max);

    updateValue(value);
    onInput(value);
  };

  return (
    <div className={styles["numeric-input__container"]} style={style}>
      <Button
        variant="text"
        size="tiny"
        disabled={decreaseDisabled}
        icon={<Icon icon={faMinus} />}
        onClick={handleAdjustNumber(-1)}
      />
      <input
        className={styles["numeric-input__input"]}
        type="number"
        value={currentValue}
        min={min}
        max={max}
        maxLength={max.toString().length}
        style={{ width: inputWidth }}
        onInput={handleInput}
        {...rest}
      />
      <Button
        variant="text"
        size="tiny"
        disabled={increaseDisabled}
        icon={<Icon icon={faPlus} />}
        onClick={handleAdjustNumber(1)}
      />
    </div>
  );
};

export default NumericInput;
