import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Avatar from '@ui/components/avatar';
import Container from '@ui/components/container';
import NavLink from '@ui/components/nav-link';
import { colors } from '@ui/shared/constants';
import PropTypes from '@root/prop-types';
import { orgsSelector } from '@state/selectors';
import Ul from '@ui/components/horizontal-list/ul';
import { remcalc } from '@ui/shared/functions';

const StyledNav = styled.div`
  background-color: #f2f2f2;
  border-bottom: ${remcalc(1)} solid ${colors.base.grey};

  & ul {
    height: ${remcalc(60)};
    margin: 0;
  }
`;

// TODO: refactor colours into constants in UI
const NavigationLinkContainer = styled.div`
  position: relative;
  padding: ${remcalc(11)} ${remcalc(12)} ${remcalc(12)};
  color: ${colors.base.secondaryDark};
  border: ${remcalc(1)} solid ${colors.base.grey};
  height: ${remcalc(24)};
  background-color: #f2f2f2;

  &.active {
    background-color: ${colors.base.background};
    border-bottom: solid ${remcalc(1)} ${colors.base.grey};
  }
`;

const OrgImage = styled.div`
  float: left;
`;

const OrgAvatar = styled(Avatar)`
  display: block;
`;

const OrgName = styled.span`
  margin-left: ${remcalc(12)};
  margin-top: ${remcalc(3)};
`;

const NavLi = styled.li`
  display: inline-block;
  padding-top: ${remcalc(12)};
  padding-left: ${remcalc(3)};

  & a {
    text-decoration: none;
  }
`;

const Shadow = styled.div`
  z-index: 1;
  position: absolute;
  height: ${remcalc(5)};
  width: 100%;
  left: 0;
  bottom: 0;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06));
`;

const StyledUL = styled(Ul)`
  padding: 0;
`;

const OrgNavigation = ({
  orgs = []
}) => {
  const navLinks = orgs.map(({
    id,
    name,
    image
  }) => {
    const to = `/${id}`;

    return (
      <NavLi key={to}>
        <NavLink activeClassName='active' to={to}>{({
          isActive
        }) =>
          <NavigationLinkContainer className={isActive ? 'active' : ''}>
            { !isActive && <Shadow />}
            <OrgImage>
              <OrgAvatar
                height={remcalc(26)}
                name={name}
                src={image}
                width={remcalc(26)}
              />
            </OrgImage>
            <OrgName>
              {name}
            </OrgName>
          </NavigationLinkContainer>
        }</NavLink>
      </NavLi>
    );
  });

  return (
    <StyledNav>
      <Container>
        <StyledUL>
          {navLinks}
        </StyledUL>
      </Container>
    </StyledNav>
  );
};

OrgNavigation.propTypes = {
  orgs: React.PropTypes.arrayOf(PropTypes.org)
};

const mapStateToProps = (state) => ({
  orgs: orgsSelector(state)
});

export default connect(
  mapStateToProps
)(OrgNavigation);
