import styled from 'styled-components';
import { Broadcast, Subscriber } from 'react-broadcast';
import { Baseline, paperEffect } from '../../shared/composers';
import { boxes, colors } from '../../shared/constants';
import { remcalc, is, isAnd } from '../../shared/functions';
import Row from '../row';
import React from 'react';

const StyledItem = styled(Row)`
  position: relative;
  height: auto;
  min-height: ${remcalc(126)};
  margin-bottom: ${remcalc(10)};
  border: ${remcalc(1)} solid ${colors.base.grey};
  background-color: ${colors.base.white};
  box-shadow: ${boxes.bottomShaddow};

  ${is('collapsed')`
    min-height: auto;
    height: ${remcalc(48)};
    margin-bottom: ${remcalc(16)};
  `};

  ${isAnd('collapsed', 'headed')`
    box-shadow: ${boxes.bottomShaddowDarker};
  `};

  ${is('flat')`
    box-shadow: none;
  `};

  ${is('stacked')`
    ${paperEffect}
  `};
`;

const Item = ({
  children,
  collapsed = false,
  headed = false,
  ...props
}) => {
  const render = (value) => {
    const newValue = {
      fromHeader: (value || {}).fromHeader,
      headed,
      collapsed
    };

    return (
      <Broadcast channel='list-item' value={newValue}>
        <StyledItem
          name='list-item'
          collapsed={collapsed}
          headed={headed}
          {...props}
        >
          {children}
        </StyledItem>
      </Broadcast>
    );
  };

  return (
    <Subscriber channel='list-item'>
      {render}
    </Subscriber>
  );
};

Item.propTypes = {
  children: React.PropTypes.node,
  collapsed: React.PropTypes.bool,
  headed: React.PropTypes.bool
};

export default Baseline(
  Item
);