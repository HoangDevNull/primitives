import * as React from 'react';

type PortalDOMProps = React.ComponentProps<'div'>;
type PortalOwnProps = {};
type PortalProps = PortalDOMProps & PortalOwnProps;

const Portal = React.forwardRef<HTMLDivElement, PortalProps>(function Portal(props, forwardedRef) {
  return <div ref={forwardedRef} />;
});

Portal.displayName = 'Portal';

export { Portal };
export type { PortalProps };