import React from "react";
import { observer } from "mobx-react-lite";

import { Option } from "types/settingTypes";

import {
  optionsPanelContainerStyles,
  optionsPanelClosingStyles,
  optionsHeaderStyles,
  optionsTitleStyles,
  closeButtonStyles,
  optionsListStyles,
  optionItemStyles,
  selectedOptionStyles,
  noOptionsStyles,
} from "./styles.css";

interface OptionsPanelInterface {
  title: string;
  options: Option[];
  currentValue: any;
  onSelect: (value: any) => void;
  onClose: () => void;
  isClosing?: boolean;
  showCloseButton?: boolean;
}

function OptionsPanel({
  title,
  options,
  currentValue,
  onSelect,
  onClose,
  isClosing = false,
  showCloseButton = true,
}: OptionsPanelInterface) {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!options || options.length === 0) {
    return (
      <div className={`${optionsPanelContainerStyles} ${isClosing ? optionsPanelClosingStyles : ""}`}>
        <div className={optionsHeaderStyles}>
          <h2 className={optionsTitleStyles}>{title}</h2>
          {showCloseButton && (
            <button className={closeButtonStyles} onClick={onClose} aria-label="Close">
              ×
            </button>
          )}
        </div>
        <div className={noOptionsStyles}>No options available</div>
      </div>
    );
  }

  return (
    <div className={`${optionsPanelContainerStyles} ${isClosing ? optionsPanelClosingStyles : ""}`}>
      <div className={optionsHeaderStyles}>
        <h2 className={optionsTitleStyles}>{title}</h2>
        {showCloseButton && (
          <button className={closeButtonStyles} onClick={onClose} aria-label="Close">
            ×
          </button>
        )}
      </div>

      <ul className={optionsListStyles}>
        {options.map((option, index) => (
          <li
            key={index}
            className={`${optionItemStyles} ${currentValue === option.value ? selectedOptionStyles : ""}`}
            onClick={() => onSelect(option.value)}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(option.value);
              }
            }}
          >
            {option.name}
            {option.description && (
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "#95a5a6",
                  marginTop: "4px",
                }}
              >
                {option.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default observer(OptionsPanel);
