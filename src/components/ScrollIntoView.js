import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

// Component to scroll to top on route change
class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);
