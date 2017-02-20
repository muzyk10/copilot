import React from 'react';
import { connect } from 'react-redux';
import PeopleSection from '@components/people-list';
import Section from './section';

import {
  peopleByProjectIdSelector,
  projectUISelector,
  projectIndexByIdSelect,
  membersSelector
} from '@state/selectors';

import {
  addMemberToProject,
  projectHandleInviteToggle,
  projectHandlePeopleRoleTooltip,
  projectHandlePeopleStatusTooltip,
  projectHandleMemberUpdate,
  projectRemoveMember
} from '@state/actions';

const People = (props) => (
  <Section {...props}>
    <PeopleSection {...props} />
  </Section>
);

const mapStateToProps = (state, {
  params = {}
}) => ({
  people: peopleByProjectIdSelector(params.projectId)(state),
  UI: projectUISelector(state),
  parentIndex: projectIndexByIdSelect(params.projectId)(state),
  platformMembers: membersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  addMemember: (member, callback) =>
    dispatch(addMemberToProject(member, callback)),
  handleToggle: () =>
    dispatch(projectHandleInviteToggle()),
  handleStatusTooltip: (id) =>
    dispatch(projectHandlePeopleStatusTooltip(id)),
  handleRoleTooltip: (id) =>
    dispatch(projectHandlePeopleRoleTooltip(id)),
  handleMemberUpdate: (updatedMember) =>
    dispatch(projectHandleMemberUpdate(updatedMember)),
  removeMember: (removeData) =>
    dispatch(projectRemoveMember(removeData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
