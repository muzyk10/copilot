import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from '@root/prop-types';
import Redirect from '@components/redirect';
import ServicesSection from './services';
import InstancesSection from './instances';
import PeopleSection from './people';
import SettingsSection from './settings';
import ManifestSection from './manifest';

import {
  orgByIdSelector,
  projectSectionsSelector,
  projectByIdSelector
} from '@state/selectors';

const SectionComponents = {
  services: ServicesSection,
  instances: InstancesSection,
  people: PeopleSection,
  settings: SettingsSection,
  manifest: ManifestSection
};

const Project = ({
  org = {},
  project = {},
  sections = []
}) => {
  const navMatches = sections.map((name) => (
    <Route
      component={SectionComponents[name]}
      key={name}
      path={`/:org/projects/:projectId/${name}`}
    />
  ));

  const missMatch = !sections.length ? null : (
    <Route component={Redirect(`/${org.id}/projects/${project.id}/services`)} />
  );

  return (
    <Switch>
      {navMatches}
      {missMatch}
    </Switch>
  );
};

Project.propTypes = {
  org: PropTypes.org,
  project: PropTypes.project,
  sections: PropTypes.sections
};

const mapStateToProps = (state, {
  match = {
    params: {}
  }
}) => ({
  org: orgByIdSelector(match.params.org)(state),
  project: projectByIdSelector(match.params.projectId)(state),
  sections: projectSectionsSelector(state)
});

export default connect(
  mapStateToProps
)(Project);
