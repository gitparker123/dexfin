import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#eee',
    color: theme.palette.common.black,
    fontSize: '17px'
  },
  body: {
    fontSize: 15
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, currency, total, raise, percentage) {
  id += 1;
  return { id, name, currency, total, raise, percentage };
}

const rows = [
  createData(1, 'Bitcoin', 2098108, 5789, -15),
  createData(2, 'Bitcoin', 2098108, 5789, -15),
  createData(3, 'Bitcoin', 2098108, 5789, -15),
  createData(4, 'Bitcoin', 2098108, 5789, -15),
  createData(5, 'Bitcoin', 2098108, 5789, -15)
];

function CurrencyTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell align="center">Currency</CustomTableCell>
            <CustomTableCell align="center">Total Number</CustomTableCell>
            <CustomTableCell align="center">Raise</CustomTableCell>
            <CustomTableCell align="center">Percentage Raise</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="center">{row.currency}</CustomTableCell>
              <CustomTableCell align="center" style={{ color: '#23cc89' }}>
                $ {row.total}
              </CustomTableCell>
              <CustomTableCell align="center">$ {row.raise}</CustomTableCell>
              <CustomTableCell align="center" style={{ color: '#f76956' }}>
                {row.percentage} %
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CurrencyTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrencyTable);
