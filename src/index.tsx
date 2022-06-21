/** packages */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router'

/** compose */
import { App } from './routes';

/** main */
const Main = () => (
  <Router>
    <App />
  </Router>
)

/** render */
render(() => <Main />, document.getElementById('root') as HTMLElement);
