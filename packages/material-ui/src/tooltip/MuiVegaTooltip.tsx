import clsx from 'clsx';
import React, { FC, memo, ReactNode } from 'react';
import {
  Paper,
  useTheme,
  makeStyles,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer
} from '@material-ui/core';
import { MuiVegaTheme, defaultVegaTooltipOptions } from '../MuiVegaTheme';
import { stringify } from './stringify';

export type Value = unknown;

export interface MuiVegaTooltipProps {
  position: { x: number; y: number };
  value: Value;
}

const useStyles = makeStyles(
  theme => ({
    root: {
      visibility: 'hidden',
      padding: theme.spacing(1),
      position: 'absolute',
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none'
    },
    visible: {
      visibility: 'visible'
    },
    tableCell: {
      borderBottom: 'none'
    }
  }),
  { name: 'MuiVegaTooltip' }
);

const MuiVegaTooltipContent: FC<{
  classes: { tableCell: string };
  value: Value;
}> = props => {
  const { classes, value } = props;
  const theme = useTheme<MuiVegaTheme>();
  const maxDepth =
    theme.vegaTooltip?.maxDepth ?? defaultVegaTooltipOptions.maxDepth;

  if (Array.isArray(value)) {
    return (
      <>{`[${value
        .map(v => (typeof v === 'string' ? v : stringify(v, maxDepth)))
        .join(', ')}]`}</>
    );
  }

  if (typeof value === 'object' && value !== null) {
    let titleElement: ReactNode;
    let tableElement: ReactNode;

    const { title, ...rest } = value as Record<string, unknown>;

    if (title) {
      titleElement = (
        <Typography key="title" component="h2" variant="h5">
          {String(title)}
        </Typography>
      );
    }

    const keys = Object.keys(rest);
    if (keys.length > 0) {
      tableElement = (
        <TableContainer>
          <Table size="small">
            <TableBody>
              {keys.map(key => {
                let val = rest[key];
                if (val === undefined) return undefined;

                if (typeof val === 'object' && val !== null) {
                  val = stringify(val, maxDepth);
                }

                return (
                  <TableRow key={key}>
                    <TableCell
                      variant="head"
                      align="right"
                      className={classes.tableCell}
                    >
                      {key}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {String(val)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    return (
      <>
        {titleElement}
        {tableElement}
      </>
    );
  }

  return <>{String(value)}</>;
};

/**
 * Vega Tooltip using Material-UI's <Paper>
 */
export let MuiVegaTooltip: FC<MuiVegaTooltipProps> = props => {
  const { position: { x, y } = { x: 0, y: 0 }, value } = props;
  const classes = useStyles(props);

  return (
    <Paper
      className={clsx(classes.root, value !== null && classes.visible)}
      style={{
        left: x,
        top: y
      }}
    >
      <MuiVegaTooltipContent classes={classes} value={value} />
    </Paper>
  );
};
MuiVegaTooltip = memo(MuiVegaTooltip);
