import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/configStore'

const Records = () => {
  const { transactionRecords } = useSelector<StoreState, any>(state => state.payment) || {}

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.singleCard}>
        <Text style={styles.cardText}>{new Date(item?.created_at)?.toLocaleString()}</Text>
        <Text style={styles.cardText}>Pending</Text>
        <Text style={styles.cardText}>{`Ksh ${item?.price}`}</Text>
      </View>
    )
  }
  const keyExtractor = (item, index) => `${item?.id}-${index}`
  return (
    <View style={styles.container}>
      <FlatList
      style={{flex:1,}}
      contentContainerStyle={{flex:1,margin:8 }}
        data={transactionRecords || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <Text
        style={{
          // flex:.05,
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 14,
          paddingVertical:8,
          color: '#008325',
          textAlignVertical:'center',
        }}>
        Powered by hustlerfundhack.co.ke
      </Text>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: 'white',
  },
  singleCard: {
    borderWidth: 1,
    borderColor: '#0095ff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 12,
    fontWeight:'600',
    lineHeight: 14,
    color: '#000000',
  },
});
