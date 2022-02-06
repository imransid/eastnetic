import React, {useCallback, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import {fetchData} from '../../store/Actions';

const InfinityScroll = () => {
  const dispatch = useDispatch();
  const dataLoaded = useSelector(state => state.LoopReducer.dataLoaded);

  const [data] = useState(dataLoaded.length !== 0 ? dataLoaded : []);

  const _fetchData = useCallback(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 150,
          backgroundColor: '#c3c3c3',
          marginBottom: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 2}}>
          {' '}
          {item.name}
        </Text>

        <QRCode value={item.url} />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={
        {
          // flex: 1,
          // flexDirection: 'column',
          // height: '100%',
          // width: '100%',
        }
      }
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      onEndReached={_fetchData}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
    />
  );
};

export default InfinityScroll;
