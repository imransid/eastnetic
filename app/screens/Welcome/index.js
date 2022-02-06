import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';

import InfinityScroll from '../../components/InfinityScroll/InfinityScroll';
import LoadingScreen from '../LoadingScreen/index';
import {fetchData} from '../../store/Actions';

const Index = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.LoopReducer.loading);

  const _fetchData = useCallback(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    _fetchData();
  }, [_fetchData]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <LoadingScreen /> : <InfinityScroll />}
    </SafeAreaView>
  );
};

export default Index;
