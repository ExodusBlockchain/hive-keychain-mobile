import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default (props) => {
  const {style, dotColor} = props;
  const {height} = style;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(0, 0, 0, 0.68)', 'transparent']}
      style={{borderRadius: height / 2, ...style, ...styles.linearGradient}}>
      <View
        style={{
          backgroundColor: dotColor,
          width: height / 5,
          height: height / 5,
          marginLeft: height / 2 - height / 5,
          borderRadius: height / 10,
        }}
      />
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
