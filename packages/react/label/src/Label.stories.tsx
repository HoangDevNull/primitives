import * as React from 'react';
import { Label, styles, useLabelContext } from './Label';

export default { title: 'Label' };

export const Basic = () => <Label style={styles.root}>Label</Label>;
export const InlineStyle = () => <Label as={Root}>Label</Label>;

export const AutoGeneratedId = () => (
  <Label as={Root}>
    Label <Control />
  </Label>
);

export const SuppliedId = () => (
  <Label id="test" as={Root}>
    Label <Control />
  </Label>
);

export const WithHtmlFor = () => (
  <>
    <Label htmlFor="test">This should add an `aria-labelledby` to the control</Label>
    <Control id="test" />
  </>
);

/* -------------------------------------------------------------------------------------------------
 * Control
 * -----------------------------------------------------------------------------------------------*/

const Control = (props: any) => {
  const id = useLabelContext();
  return <span {...props}>{id}</span>;
};

/* -------------------------------------------------------------------------------------------------
 * Styled components
 * -----------------------------------------------------------------------------------------------*/

const Root = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof Label>>(
  ({ children, ...props }, forwardedRef) => (
    <span
      {...props}
      style={{ ...styles.root, border: '1px solid gainsboro', margin: 10, padding: 10 }}
      ref={forwardedRef}
    >
      {children}
    </span>
  )
);