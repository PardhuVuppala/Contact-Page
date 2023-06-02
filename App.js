import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    { id: 1, name: 'Pardhu', num: '9948805602' },
    { id: 2, name: 'Mahidhar', num: '7207538869' },
    { id: 3, name: 'Ramesh', num: '9951149411' },
    { id: 4, name: 'Siva', num: '7159595295' },
    { id: 5, name: 'Arjun Mobile', num: '9874256158' },
    { id: 6, name: 'Arjun Home', num: '9948756245' },
    { id: 7, name: 'Suresh', num: '6301918869' },
    { id: 8, name: 'Nakhul', num: '7568988697' },
    { id: 9, name: 'Raghavendra', num: '6302565600' },
    { id: 10, name: 'Sachin', num: '9848687559' },
    { id: 11, name: 'Dinesh', num: '9545151151' },
    { id: 12, name: 'Raghu', num: '7568584847' },
    { id: 13, name: 'Kat', num: '7337292278' }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredItems = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  useState(() => {
    setFilteredData(data);
  }, []);

  const handleItemPress = (item) => {
    Alert.alert('contact info',` Name: ${item.name} \n Num: ${item.num}`,);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={handleSearch}
        value={searchQuery}
        placeholder="Search..."
      />
      <FlatList style={styles.Text}
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={styles.display}>
            <View style={styles.start}>
              <Text style={styles.startText}>{item.name[0]}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{item.num}</Text>
          </View>
        </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  search: {
    width: 320,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'black',
    height: 40,
    borderRadius: 12,
    paddingLeft: 12,
    marginBottom: 2,
    marginTop: 5
  },
  display: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: 380,
  },
  start: {
    borderRadius: 50,
    backgroundColor: 'grey',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 25,
    color: 'white',
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  number: {
    marginLeft: 10,
    fontSize: 12,
    color: 'grey',
  },
  Text: {
    marginLeft:10,
  },
});

export default App;