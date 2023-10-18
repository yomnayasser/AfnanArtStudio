import React from 'react';
import {
  Table as TableRN,
  TableWrapper,
  Row,
  Rows,
} from 'react-native-table-component';

import styles from './Table.styles';
type Props = {
  tableHead: string[];
  tableData: string[][];
};

const Table = ({tableHead, tableData}: Props) => {
  return (
    <TableRN style={styles.table} borderStyle={styles.tableContainer}>
      <Row
        data={tableHead}
        flexArr={[1, 1, 1]}
        style={styles.head}
        textStyle={styles.text}
      />
      <TableWrapper style={styles.wrapper}>
        <Rows
          data={tableData}
          flexArr={[1, 1, 1]}
          textStyle={styles.text}
          style={styles.row}
        />
      </TableWrapper>
    </TableRN>
  );
};

export default Table;
