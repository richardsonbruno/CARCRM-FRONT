import { Provider } from 'react-redux'
import { store } from './store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import { blue } from '@material-ui/core/colors';

import Routes from './routes'

import { Loading, Notify } from './view/components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true,
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Notify />
        <Loading />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
