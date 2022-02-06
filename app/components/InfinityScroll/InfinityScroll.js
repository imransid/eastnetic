import React, {useCallback, useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Image, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import {fetchData} from '../../store/Actions';
import {Card} from 'react-native-paper';
import {hdp, wdp} from '../../styles/Dimensions';
import {CustomButtonWithBG} from '../../components/CustomButton';
import {styles} from '../../styles';

const InfinityScroll = () => {
  const dispatch = useDispatch();
  const dataLoaded = useSelector(state => state.LoopReducer.dataLoaded);

  const [data] = useState(dataLoaded.length !== 0 ? dataLoaded : []);
  const [showItem, setShowItem] = useState('0');

  const _fetchData = useCallback(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const OnPress = item => {
    if (item === showItem) {
      setShowItem('0');
    } else {
      setShowItem(item);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Card style={{width: wdp(300)}}>
        <Card.Title title={item.name} subtitle="" />

        <Card.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item.id === showItem ? (
            <Card.Cover style={{width: wdp(300)}} source={{uri: item.url}} />
          ) : (
            <QRCode value={item.url} />
          )}
        </Card.Content>

        <Card.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomButtonWithBG
            style={{marginTop: 10}}
            buttonPress={() => OnPress(item.id)}
            title={item.id === showItem ? 'Show QR Code' : 'Show Image'}
          />
        </Card.Content>

        {/* <Card.Cover source={{uri: item.url}} /> */}
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        onEndReached={_fetchData}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
};

export default InfinityScroll;
