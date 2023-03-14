import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ProcessingModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
//   const navigation = useNavigation();
//   const [confirmInfoOne, setConfirmInfoOne] = useState(true);
//   const [confirmInfoTwo, setConfirmInfoTwo] = useState(true);
//   const [confirmInfoThree, setConfirmInfoThree] = useState(true);
//   const [confirmInfoFour, setConfirmInfoFour] = useState(true);



    setTimeout(() => {
        setModalVisible(false);
    }, 5000);

//     setTimeout(() => {
//       setConfirmInfoOne(false);
//     }, 5000);
//     setTimeout(() => {
//       setConfirmInfoTwo(false);
//     }, 7000);
//     setTimeout(() => {
//       setConfirmInfoThree(false);
//     }, 9000);
//     setTimeout(() => {
//         setConfirmInfoFour(false);
//         setConfirmInfoOne(true);
//         setConfirmInfoTwo(true);
//         setConfirmInfoThree(true);        
//         setConfirmInfoFour(true);     
//     }, 11000);    


  return (
      <View style={styles.centeredView}>
     
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(modalVisible);
        }}> */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Processing...</Text>
            <View>
              <View style={styles.modal}>
                <View style={styles.example}>
                  {/* {confirmInfoTwo ? (
                    <Progress.Circle  
                      style={{width: 20, height: 20, color: '#3467FF'}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/confirmInfo.png')}
                      style={{width: 17, height: 17}}
                    />
                  /* )} } */}
                  <Text style={styles.exampleText}>1. Check personal info</Text>
                </View>
                <View style={styles.example}>
                  {/* {confirmInfoTwo ? (
                    <Progress.Circle  
                      style={{width: 20, height: 20, color: '#3467FF'}}
                    />
                  ) : ( */}
                    <Image
                      source={require('../assets/confirmInfo.png')}
                      style={{width: 17, height: 17}}
                    />
                  {/* )} */}

                  <Text style={styles.exampleText}>
                   2. Checking mobile money transactions messages from your device.
                  </Text>
                </View>
                <View style={styles.example}>
                 {/* {confirmInfoTwo ? (
                    <Progress.Circle  
                      style={{width: 20, height: 20, color: '#3467FF'}}
                    />
                  ) : ( */}
                    <Image
                      source={require('../assets/confirmInfo.png')}
                      style={{width: 17, height: 17}}
                    />
                  {/* )} */}
                  <Text style={styles.exampleText}>3. Inteligent decision</Text>
                </View>
                <View style={styles.example}>
                  {/* {confirmInfoTwo ? (
                    <Progress.Circle  
                      style={{width: 20, height: 20, color: '#3467FF'}}
                    />
                  ) : ( */}
                    <Image
                      source={require('../assets/confirmInfo.png')}
                      style={{width: 17, height: 17}}
                    />
                  {/* )} */}
                  <Text style={styles.exampleText}>4. Review completed</Text>
                </View>
              </View>
            </View>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.getMoneyText}>close</Text>
            </Pressable> */}
          </View>
        </View>
      {/* </Modal> */}
      {/* <View style={styles.mainbtn}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            setModalVisible(!modalVisible)
          }}>
          <Text style={styles.getMoneyText}>Get Money</Text>
        </Pressable>
      </View> */}
    
    </View>    
  );
};

export default ProcessingModal;

const styles = StyleSheet.create({
  // modal css
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 1,
  },

  button: {
    backgroundColor: '#E4EAFF',
    borderWidth: 2,
    borderColor: '#3467FF',
    borderRadius: 40,
    width: 142,
  },

  modalBtn: {
    backgroundColor: '#3467FF',
    borderRadius: 40,
    paddingHorizontal: 33,
    paddingVertical: 5,
  },

  mainbtn: {
    alignItems: 'center',
    marginVertical: 30,
  },

  buttonOpen: {
    backgroundColor: '#E4EAFF',
  },
  buttonClose: {
    backgroundColor: '#E4EAFF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  example: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  exampleText: {
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  getMoneyText: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#3467FF',
  },
});
