import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/configStore';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector<StoreState, any>(state => state.notifications)
  
  
  return (
    <View style={styles.container}>
      <View style={styles.dropdownAll}>
        <Text style={styles.dropdownAllText}>All</Text>
        <Icon
          style={styles.dropdownAllIcon}
          name="expand-more"
          size={25}
          color="#000000"
        />
      </View>
      <ScrollView style={{
      flex:1,
      }}
      contentContainerStyle={{
        margin:8
      }}
      >

  
        {!!notifications && notifications?.map((item,index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <View style={styles.cardTextMain}>
              <Text style={styles.cardText}>{item.ResponseDescription}</Text>
            </View>
            <View style={styles.cardDateMain}>
              <Text style={styles.cardDateText}>{new Date(item.created_at).toDateString()}</Text>
              <Text style={styles.cardTimeMain}>{new Date(item.created_at).toTimeString()}</Text>
            </View>
          </View>
        ))}
      
        </ScrollView>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 17,
          color: '#008325',
          paddingVertical:8
          // marginTop: 140,
        }}>
        Powered by hustlerfundhack.co.ke
      </Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  dropdownAll: {
    borderColor: '#000000',
    borderWidth: 2,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 55,
    borderRadius: 10,
  },
  dropdownAllText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#000000',
    lineHeight: 21,
  },
  dropdownAllIcon: {},
  cardTextMain: {
    borderWidth: 1,
    borderColor: '#4497E4',
    padding: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 18,
    color: '#000000',
  },
  cardDateMain: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardDateText: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 10,
    color: '#000000',
    marginRight: 10,
  },
  cardTimeMain: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 10,
    color: '#000000',
  },
});
