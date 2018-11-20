import { createMuiTheme } from '@material-ui/core/styles';

export const MainAppBarHeight = 64;
export const MainDrawerWidth = 180;

export const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#666ad1',
      main: '#303f9f',
      dark: '#001970',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#b75f5f',
      main: '#af3b3b',
      dark: '#9e0404',
      contrastText: '#ffffff',
    }
  }
});

export const CustomStyles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: MainAppBarHeight,
    marginLeft: MainDrawerWidth,
    height: '100%',
    overflow: 'auto'
  }
});
