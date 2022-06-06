import { css } from "@emotion/react";
import styled from "@emotion/styled";

type InputType = "text" | "email" | "password" | "number";

type InputFieldHtmlProps = HTMLInputElement | HTMLTextAreaElement;

export type InputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isMultiLine?: boolean;
  type?: InputType;
  onFocus?: () => void;
  icon?: string;
  maxCharacters?: number;
  error?: string;
  list?: string;
  min?: string;
  disabled?: boolean;
};

export const InputField = ({
  placeholder,
  value,
  onChange,
  onFocus,
  isMultiLine,
  icon,
  maxCharacters,
  error,
  type,
  list,
  min,
  disabled,
  ...additionalProps
}: InputFieldProps) => {
  const textClasses = {
    hasIcon: icon ? "show-icon" : "",
    error: error ? "show-error" : "",
  };
  const FieldComponent = isMultiLine ? TextArea : TextInput;

  return (
    <InputFieldContainer type={type}>
      <FieldComponent
        className={textClasses.hasIcon + " " + textClasses.error}
        style={{ backgroundImage: icon ? `url(${icon})` : undefined }}
        placeholder={placeholder}
        maxLength={maxCharacters || 500}
        type={type || "text"}
        onChange={(e: React.ChangeEvent<InputFieldHtmlProps>) => {
          onChange(e.currentTarget.value);
        }}
        onFocus={onFocus}
        value={value}
        list={list}
        min={min}
        disabled={disabled}
        {...additionalProps}
      />
      <ErrorAndCounter>
        {error && <Error>{error}</Error>}
        {maxCharacters && (
          <WordCount>{maxCharacters - value.trim().length}</WordCount>
        )}
      </ErrorAndCounter>
    </InputFieldContainer>
  );
};

const InputFieldContainer = styled.div<{ type?: InputType }>`
  max-width: 438px;
  min-width: ${(props) => (props.type === "number" ? "auto" : "339px")};
`;

export const commonInputStyles = css`
  width: 100%;
  resize: none;
  border: 1px solid #e5e1e6;
  border-radius: 8px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  ${commonInputStyles}
  min-height: 92px;
  overflow: auto;

  &.show-error {
    border: 1px solid #f07973;
  }
`;

export const TextInput = styled.input`
  ${commonInputStyles}
  height: 18px;
  overflow: hidden;
  text-align: left;

  &.show-error {
    border: 1px solid #f07973;
  }
  &.show-icon {
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 1rem 50%;
    padding-left: 52px;
  }
`;

const Error = styled.div`
  flex-grow: 1;
  color: #f07973;
  font-size: 1rem;
`;

const WordCount = styled.div``;

const ErrorAndCounter = styled.div`
  display: flex;
  justify-content: right;
`;
