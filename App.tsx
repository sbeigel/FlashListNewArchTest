import React, {useRef, useState} from 'react';
import {FlatList, LayoutAnimation, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const list = useRef<FlatList<number> | null>(null);

  const removeItem = (item: number) => {
    setData(
      data.filter(dataItem => {
        return dataItem !== item;
      }),
    );
    // after removing the item, we start animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const renderItem = ({item}: {item: number}) => {
    const backgroundColor = item % 2 === 0 ? '#00a1f1' : '#ffbb00';
    return (
      <Pressable
        onPress={() => removeItem(item)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: backgroundColor,
          }}>
          <Text>Cell # {item}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ref={list}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        data={data}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
  },
});

export default App;
