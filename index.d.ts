// Type definitions for react-native-material-dropdown 0.11
// Project: https://github.com/n4kz/react-native-material-dropdown
// Definitions by: Jaydeep <https://github.com/jaydeep987>
//                 Michael <https://github.com/mchappell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { LayoutChangeEvent, StyleProp, TextStyle, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';

/**
 * Dropdown component props
 */
export interface DropDownProps extends TouchableWithoutFeedbackProps {
  /** Dropdown data items */
  data: DropDownData[];
  /** Component disabled or not. (default: false) */
  disabled?: boolean;
  /** Selected value */
  value?: string | number;
  /** Label to be shown for dropdown */
  label?: React.ReactNode;
  /** Enable RTL layout */
  absoluteRTLLayout?: boolean;
  /** Provide Dropdown top-left position */
  dropdownOffset?: DropDownOffset;
  /** Provide Dropdown margins */
  dropdownMargins?: DropDownMargins;
  /** Provide dropdown position (dynamic if undefined) */
  dropdownPosition?: number;
  /** Provide Ripple color */
  rippleColor?: string;
  /** Whether ripple be centered or not (default: false) */
  rippleCentered?: boolean;
  /** Whether ripple rendered in sequential order (default: false)  */
  rippleSequential?: boolean;
  /** Ripple insets  */
  rippleInsets?: DropDownInsets;
  /** Ripple opacity (default: 0.54) */
  rippleOpacity?: number;
  /** Shade opacity (default: 0.12) */
  shadeOpacity?: number;
  /** Ripple duration (defailt: 400) */
  rippleDuration?: number;
  /** Animation duration (default: 225) */
  animationDuration?: number;
  /** Offset after label transition Animation (default: -25) */
  animationOffset?: number;
  /** Set font size of dropdown items (default: 16) */
  fontSize?: number;
  /** Set font size of label (default: 12) */
  labelFontSize?: number;
  /** Set Text color (default: rgba(0, 0, 0, .87)) */
  textColor?: string;
  /** Set Item color (default: rgba(0, 0, 0, .54)) */
  itemColor?: string;
  /** Set selected item color */
  selectedItemColor?: string;
  /** Set disabled item color */
  disabledItemColor?: string;
  /** Set base color (default: rgba(0, 0, 0, .38)) */
  baseColor?: string;
  /** Set Item text style. */
  itemTextStyle?: StyleProp<TextStyle>;
  /** Set Item count (default: 4) */
  itemCount?: number;
  /** Set Item padding (default: 8) */
  itemPadding?: number;
  /** Set container styles */
  containerStyle?: StyleProp<ViewStyle>;
  /** Set input container styles */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /** Set the label styles */
  labelTextStyle?: StyleProp<TextStyle>;
  /** Set overlay styles */
  overlayStyle?: StyleProp<ViewStyle>;
  /** Set picker styles */
  pickerStyle?: StyleProp<ViewStyle>;
  /** Specify which orientations are supported. (default: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']) */
  supportedOrientations?: string[];
  /** Use native driver (default: false) */
  useNativeDriver?: boolean;
  /** Hitslop insets (default: { top: 6, right: 4, bottom: 6, left: 4 }) */
  hitSlop?: DropDownInsets;
  /** Set textinput tintColor */
  tintColor?: string;
  /** Set textinput lineWidth */
  lineWidth?: number;
  /** Deprecated, use animationOffset */
  halfWidth?: boolean;

  /** Value extractor function. Extract value from item. */
  valueExtractor?(item: DropDownData, index: number): string;
  /** Label extractor function. Extract label from item. */
  labelExtractor?(item: DropDownData, index: number): string;
  /** Props extractor function. Extract props from item. */
  propsExtractor?(item: DropDownData, index: number): Partial<DropDownProps>;

  /** Event: When layout changes */
  onLayout?(event: LayoutChangeEvent): void;
  /** Event: When dropdown opens */
  onFocus?(): void;
  /** Event: When focus lost from dropdown */
  onBlur?(): void;
  /** Event: When change selected item */
  onChangeText?(value: string, index: number, data: DropDownData[]): void;

  /** Render base component */
  renderBase?(props: RenderBaseProps): JSX.Element;
  /** Render text field accessory (by default on rightSide) */
  renderAccessory?(): JSX.Element;
  /** Should text field accessory be on left side*/
  renderLeftAccessory?:  boolean | React.ElementType;
  /** Should text field accessory be on right side*/
  renderRightAccessory?: boolean | React.ElementType;

}

/**
 * Dropdown data item
 */
export interface DropDownData {
  /** Value of item */
  value: string | number;
  /** Label to be shown */
  label?: string;
  /** Props for this item */
  props?: Partial<DropDownProps>;
}

/**
 * Dropdown offset position
 */
export interface DropDownOffset {
  /** Top offset */
  top: number;
  /** Left offset */
  left: number;
}

/**
 * Dropdown margins
 */
export interface DropDownMargins {
  /** Minimum value */
  min: number;
  /** Maximum value */
  max: number;
}

/**
 * Insets
 */
export interface DropDownInsets {
  /** Top */
  top: number;
  /** Right */
  right: number;
  /** Bottom */
  bottom: number;
  /** Left */
  left: number;
}

/**
 * Render base function props
 */
export interface RenderBaseProps extends DropDownProps {
  /** Title of dropdown */
  title: string;
}

/**
 * React-native material dropdown component.
 * Material dropdown with consistent behaviour on iOS and Android
 */
export class Dropdown extends React.PureComponent<DropDownProps> {
  /*
   * Acquire focus
   */
  focus(): void;
  /*
   * Release focus
   */
  blur(): void;
}
