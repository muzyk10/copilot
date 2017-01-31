const React = require('react');
const ReactIntl = require('react-intl');
const ReactRedux = require('react-redux');
const ReactRouter = require('react-router');

const Button = require('@ui/components/button');
const Column = require('@ui/components/column');
const EmptyProjects = require('@components/empty/projects');
const PropTypes = require('@root/prop-types');
const Row = require('@ui/components/row');
const selectors = require('@state/selectors');

const {
  connect
} = ReactRedux;

const {
  FormattedMessage
} = ReactIntl;

const {
  orgByIdSelector,
  projectsByOrgIdSelector
} = selectors;

const {
  Link
} = ReactRouter;

const Projects = (props) => {

  const {
    org = {},
    projects = [],
    router
  } = props;

  const empty = projects.length ? null : (
    <EmptyProjects />
  );

  const _projects = projects.map((project) => (
    <li key={project.id}>
      <Link activeClassName='active' to={`/${org.id}/projects/${project.id}`}>
        {project.name}
      </Link>
    </li>
  ));

  const onCreateProject = (evt) =>
    router.transitionTo(`/${org.id}/new-project`);

  return (
    <div>
      {empty}
      <Row>
        <Column xs={12}>
          <Button onClick={onCreateProject}>
            <FormattedMessage id='create-new' />
          </Button>
        </Column>
      </Row>
      <Row>
        <ul name='projects'>
          {_projects}
        </ul>
      </Row>
    </div>
  );
};

Projects.propTypes = {
  org: PropTypes.org,
  projects: React.PropTypes.arrayOf(PropTypes.project),
  router: React.PropTypes.object
};

const mapStateToProps = (state, {
  params = {}
}) => ({
  org: orgByIdSelector(params.org)(state),
  projects: projectsByOrgIdSelector(params.org)(state),
  router: state.app.router
});

module.exports = connect(
  mapStateToProps
)(Projects);
