import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SwipCard = ({data}) => {
  return (
    <View style={Style.container}>
      <View style={Style.head}>
        <Text style={Style.title}>{data.title.split(' ').join('\n')}</Text>
      </View>
      <View>
        <View style={Style.schedule}>
          <Image source={data.avatar} style={Style.image} />
        </View>
      </View>
    </View>
  );
};

export default SwipCard;

const Style = StyleSheet.create({
  container: {
    marginVertical: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#a8e0b8',
  },
  head: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 33,
    fontWeight: '600',
    color: '#000',
  },
  schedule: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  image: {
    height: 100 * 2.5,
    width: 100 * 2.5,
    resizeMode: 'cover',
  },
});
