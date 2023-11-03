import React from 'react';
import {
  Table as TableRN,
  TableWrapper,
  Row,
  Rows,
} from 'react-native-table-component';
import {ViewStyle} from 'react-native';

import styles from './Table.styles';
import {View} from '@wrappers/index';

type Props = {
  tableHead: string[];
  tableData: string[][];
  style?: ViewStyle;
};

const Table = ({tableHead, tableData, style}: Props) => {
  return (
    <View style={style ? style : {}}>
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
    </View>
  );
};

export default Table;
