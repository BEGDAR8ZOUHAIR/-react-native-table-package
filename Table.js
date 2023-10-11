import React from 'react';
import { DataTable } from 'react-native-paper';

const Table = ({ columns, data }) =>
{
    return (
        <DataTable>
            <DataTable.Header>
                {columns.map((column, index) => (
                    <DataTable.Title key={index}>{column}</DataTable.Title>
                ))}
            </DataTable.Header>

            {data.map((row, rowIndex) => (
                <DataTable.Row key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
                    ))}
                </DataTable.Row>
            ))}
        </DataTable>
    );
};

export default Table;
