import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#D3D3D3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
