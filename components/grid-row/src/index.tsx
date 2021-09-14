import React from 'react';
import styled from 'styled-components';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const StyledRow: React.FC<GridRowProps> = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: `0 -${GUTTER_HALF}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      flexDirection: 'row',
    },
  },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 * Example
 *
 * * https://codesandbox.io/s/x917knwm4z
 *
 * Simple
 *
 * ```jsx
 * import { GridRow, GridCol } from 'govuk-react'
 *
 * <Fragment>
 *   <GridRow>
 *     <GridCol>
 *       ...
 *     </GridCol>
 *   </GridRow>
 * </Fragment>
 * ```
 *
 * See GridCol for extended usage.
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 *
 */
const GridRow: React.FC<GridRowProps> = (props) => <StyledRow {...props} />;

interface GridRowProps {
  /**
   * One or more GridCol nodes
   */
  children: React.ReactNode;
}

export default GridRow;
