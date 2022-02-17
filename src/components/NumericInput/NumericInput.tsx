import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button";
import { Icon } from "components/Icon";
import { clamp } from "utils/number.utils";

import styles from "./NumericInput.module.css";

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
        size="small"
        aria-label="Decrease Value"
        aria-disabled={decreaseDisabled}
        disabled={decreaseDisabled}
        icon={<Icon icon={faMinus} />}
        onClick={handleAdjustNumber(-1)}
      />
      <input
        className={styles["numeric-input__input"]}
        type="number"
        aria-label="Numeric Input"
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
        size="small"
        aria-label="Increase Value"
        aria-disabled={increaseDisabled}
        disabled={increaseDisabled}
        icon={<Icon icon={faPlus} />}
        onClick={handleAdjustNumber(1)}
      />
    </div>
  );
};

export default NumericInput;
