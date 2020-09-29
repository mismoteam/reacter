/**
 * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/TextField/TextField.d.ts
 */
import { TextFieldProps } from "@material-ui/core/TextField";

type TextFieldCustomProps = {
  name: string;
  control?: any;
  errors?: any;
  type?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onChange?: () => void;
  onFocus?: () => void;
  onKeyDown?: () => void;
  onKeyUp?: () => void;
};

export type Props = TextFieldProps & TextFieldCustomProps;
