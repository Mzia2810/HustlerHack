import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/configStore';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector<StoreState, any>(state => state.notifications)
  const data = [
    {
      id: 1,
      text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
      date: '02/23/2023',
      time: '19:09',
    },
    {
      id: 2,
      text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
      date: '02/23/2023',
      time: '19:09',
    },
    {
      id: 3,
      text: 'sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum',
      date: '02/23/2023',
      time: '19:09',
    },
  ];
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
      <View style={{ marginTop: 30 }}>
        {!!notifications && notifications?.map(item => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <View style={styles.cardTextMain}>
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
            <View style={styles.cardDateMain}>
              <Text style={styles.cardDateText}>{item.date}</Text>
              <Text style={styles.cardTimeMain}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 17,
          color: '#008325',
          marginTop: 140,
        }}>
        Powered by hustlerfundhack.co.ke
      </Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
