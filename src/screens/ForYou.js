import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SwipCard from '../component/SwipCard';

const ForYou = props => {
  const _carousel = useRef();

  const _renderItem = ({item, index}) => {
    return <SwipCard key={item.id} data={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        {props.images && props.images.length ? (
          <ScrollView>
            <Carousel
              ref={_carousel}
              layout={'default'}
              data={props.images}
              renderItem={_renderItem}
              sliderWidth={100 * 4}
              itemWidth={100 * 3}
            />
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    marginVertical: 40,
  },
});

export default ForYou;
