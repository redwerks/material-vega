import * as vega from 'vega';
import { colors } from '@material-ui/core';

/**
 * Overrides vega.scheme color scales with ones using Material UI colors
 */
export function overrideColorSchemes(): void {
  vega.scheme('accent', [
    colors.green[300],
    colors.deepPurple[200],
    colors.orange[200],
    colors.yellow['A100'],
    colors.blue[700],
    colors.pink['A700'],
    colors.orange[900],
    colors.grey[700]
  ]);

  vega.scheme('category10', [
    colors.blue[700],
    colors.yellow[900],
    colors.green[600],
    colors.red['A400'],
    colors.deepPurple[300],
    colors.brown[500],
    colors.pink['A100'],
    colors.grey[600],
    colors.lime[700],
    colors.cyan[500]
  ]);

  vega.scheme('category20', [
    colors.blue[700],
    colors.blue[200],
    colors.yellow[900],
    colors.orange[300],
    colors.green[600],
    colors.green[200],
    colors.red[700],
    colors.red[200],
    colors.deepPurple[300],
    colors.deepPurple[200],
    colors.brown[500],
    colors.brown[200],
    colors.pink[300],
    colors.pink[100],
    colors.grey[600],
    colors.grey[400],
    colors.lime[700],
    colors.lime[400],
    colors.cyan[500],
    colors.cyan[200]
  ]);

  vega.scheme('category20b', [
    colors.indigo[700],
    colors.indigo[500],
    colors.indigo[400],
    colors.indigo[200],
    colors.lightGreen[800],
    colors.lightGreen[600],
    colors.lime[600],
    colors.lime[400],
    colors.amber[900],
    colors.amber[800],
    colors.amber[600],
    colors.amber[200],
    colors.pink[800],
    colors.pink[400],
    colors.pink[300],
    colors.pink[200],
    colors.purple[500],
    colors.purple[400],
    colors.purple[300],
    colors.purple[200]
  ]);

  vega.scheme('category20c', [
    colors.blue[600],
    colors.blue[300],
    colors.blue[200],
    colors.blue[100],
    colors.orange[900],
    colors.orange[700],
    colors.orange[300],
    colors.orange[200],
    colors.green[600],
    colors.green[300],
    colors.green[200],
    colors.green[100],
    colors.indigo[400],
    colors.indigo[300],
    colors.indigo[100],
    colors.indigo[50],
    colors.grey[700],
    colors.grey[500],
    colors.grey[400],
    colors.grey[300]
  ]);

  vega.scheme('dark2', [
    colors.teal[500],
    colors.orange[900],
    colors.indigo[400],
    colors.pink[500],
    colors.lightGreen[700],
    colors.amber[700],
    colors.brown[400],
    colors.grey[700]
  ]);

  vega.scheme('paired', [
    colors.lightBlue[200],
    colors.blue[700],
    colors.lightGreen[200],
    colors.green[600],
    colors.red[200],
    colors.red[700],
    colors.orange[300],
    colors.orange[700],
    colors.purple[100],
    colors.deepPurple[500],
    colors.yellow['A100'],
    colors.brown[500]
  ]);

  vega.scheme('pastel1', [
    colors.deepOrange[200],
    colors.blue[200],
    colors.green[100],
    colors.purple[100],
    colors.orange[100],
    colors.yellow[50],
    colors.brown[100],
    colors.pink[50],
    colors.grey[100]
  ]);

  vega.scheme('pastel2', [
    colors.teal[100],
    colors.deepOrange[100],
    colors.blue[100],
    colors.pink[100],
    colors.lightGreen['A100'],
    colors.yellow[200],
    colors.brown[100],
    colors.grey[400]
  ]);

  vega.scheme('set1', [
    colors.red['A400'],
    colors.blue[600],
    colors.green[500],
    colors.purple[400],
    colors.yellow[900],
    colors.yellow['A200'],
    colors.brown[500],
    colors.pink['A100'],
    colors.grey[500]
  ]);

  vega.scheme('set2', [
    colors.teal[300],
    colors.deepOrange[300],
    colors.indigo[200],
    colors.pink[200],
    colors.lightGreen[300],
    colors.yellow[600],
    colors.orange[300],
    colors.grey[400]
  ]);

  vega.scheme('set3', [
    colors.teal[200],
    colors.yellow['A100'],
    colors.deepPurple[100],
    colors.red['A100'],
    colors.blue[300],
    colors.orange[300],
    colors.lightGreen[300],
    colors.pink[100],
    colors.grey['A100'],
    colors.purple[300],
    colors.green[100],
    colors.yellow[500]
  ]);

  vega.scheme('tableau10', [
    colors.blue[600],
    colors.yellow[900],
    colors.red[400],
    colors.teal[300],
    colors.green[600],
    colors.amber[400],
    colors.pink[300],
    colors.pink[200],
    colors.brown[400],
    colors.grey[400]
  ]);

  vega.scheme('tableau20', [
    colors.blue[600],
    colors.blue[200],
    colors.orange[700],
    colors.orange[300],
    colors.green[600],
    colors.green[300],
    colors.lime[800],
    colors.lime[400],
    colors.teal[400],
    colors.teal[200],
    colors.red[400],
    colors.red[200],
    colors.grey[600],
    colors.grey[400],
    colors.pink[300],
    colors.pink[100],
    colors.deepPurple[300],
    colors.deepPurple[200],
    colors.brown[400],
    colors.brown[200]
  ]);
}
