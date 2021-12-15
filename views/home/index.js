import * as React from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native'
import { useState } from 'react/cjs/react.development'
import { StatusBar } from 'expo-status-bar'

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const renderItem = ({ item }) => <Item title={item.title} />
  const addItem = () => {
    setItems([
      ...items,
      {
        id: new Date().getDate(),
        title: text,
      },
    ])
    setText('')
  }
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="确认" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    display: 'flex'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default HomeScreen
