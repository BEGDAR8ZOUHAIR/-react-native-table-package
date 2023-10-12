# React Native Table Component

A versatile and customizable table component for React Native.


## Installation

You can install this package using npm or yarn:

```bash
npm install @begdar8zouhair/react-native-table
# or
yarn add @begdar8zouhair/react-native-table

```

## Usage

 Basic usage :

```bash
import { Table } from '@begdar8zouhair/react-native-table';

// Define your column names and data
const columns = ['Name', 'Age', 'Location'];
const data = [
  ['John Doe', '28', 'New York'],
  ['Jane Smith', '24', 'San Francisco'],
  // Add more rows and data here
];

// In your component's render method:
<Table columns={columns} data={data} />
```

For React Native :

```bash
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table } from '@begdar8zouhair/react-native-table';

const MyTableScreen = () => {
  const columns = ['Name', 'Age', 'City'];
  const data = [
    ['John Doe', 30, 'New York'],
    ['Jane Smith', 25, 'San Francisco'],
    // Add more rows and data here
  ];

  return (
    <View style={styles.container}>
      <Table columns={columns} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MyTableScreen;
```

## Props
+ columns (array of strings): An array of column names.

+ data (array of arrays): A 2D array representing the table's data.

+ style (object, optional): Additional styles for the table.

 ## Customization
You can customize the table's appearance and behavior by passing additional styling and props to the ReactNativeTable component.

## License
This package is open-source and available under the MIT License.

## Issues and Contributions
If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Contributions are also welcome through pull requests.

## Authors
Zouhair Begdar

<p align="center">
  <a href="https://github.com/begdar8zouhair/react-native-table/issues">
    <img src="https://img.shields.io/github/issues/begdar8zouhair/react-native-table" alt="GitHub issues">
  </a>
  <a href="https://github.com/begdar8zouhair/react-native-table">
    <img src="https://img.shields.io/github/stars/begdar8zouhair/react-native-table" alt="GitHub stars">
  </a>
</p>


