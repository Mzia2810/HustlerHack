import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GetMoneyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [processing, setProcessing] = useState(true);

  const [approval, setApproval] = useState(false);
  const [approvalModal, setApprovalModal] = useState(true);

  const [confirmInfoOne, setConfirmInfoOne] = useState(true);
  const [confirmInfoTwo, setConfirmInfoTwo] = useState(true);
  const [confirmInfoThree, setConfirmInfoThree] = useState(true);
  const [confirmInfoFour, setConfirmInfoFour] = useState(true);

  const modalOpen = () => {
    setProcessing(false);
    setTimeout(() => {
      setConfirmInfoOne(false);
    }, 5000);
    setTimeout(() => {
      setConfirmInfoTwo(false);
    }, 7000);
    setTimeout(() => {
      setConfirmInfoThree(false);
    }, 9000);

    setTimeout(() => {
      setApproval(true);
      setApprovalModal(false);
    }, 11000);
  };

  const submitApproval = () => {
    setTimeout(() => {
      setConfirmInfoOne(true);
      setConfirmInfoTwo(true);
      setConfirmInfoThree(true);
      setConfirmInfoFour(true);
    }, 13000);
    setApproval(true);
    setModalVisible(false);
    setProcessing(true);
  };

  React.useEffect(()=>{
    // modalOpen( )
  },[])

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {!processing ? (
            <View style={styles.modalView}>
              {approvalModal === true && (
                <View>
                  <Text style={styles.modalText}>Processing...</Text>
                  <View style={styles.modal}>
                    <View style={styles.example}>
                      <View>
                        {confirmInfoOne ? (
                          <ProgressBarAndroid
                            style={{width: 20, height: 20, color: '#3467FF'}}
                          />
                        ) : (
                          <Image
                            source={require('../assets/confirmInfo.png')}
                            style={{width: 17, height: 17}}
                          />
                        )}
                      </View>
                      <View>
                        <Text style={styles.exampleText}>
                          1. Check personal info
                        </Text>
                      </View>
                    </View>
                    <View style={styles.example}>
                      <View>
                        {confirmInfoTwo ? (
                          <ProgressBarAndroid
                            style={{width: 20, height: 20, color: '#3467FF'}}
                          />
                        ) : (
                          <Image
                            source={require('../assets/confirmInfo.png')}
                            style={{width: 17, height: 17}}
                          />
                        )}
                      </View>
                      <View>
                        <Text style={styles.exampleText}>
                          2. Checking mobile money transactions messages from
                          your device.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.example}>
                      <View>
                        {confirmInfoThree ? (
                          <ProgressBarAndroid
                            style={{width: 20, height: 20, color: '#3467FF'}}
                          />
                        ) : (
                          <Image
                            source={require('../assets/confirmInfo.png')}
                            style={{width: 17, height: 17}}
                          />
                        )}
                      </View>
                      <View>
                        <Text style={styles.exampleText}>
                          3. Inteligent decision
                        </Text>
                      </View>
                    </View>
                    <View style={styles.example}>
                      <View>
                        {confirmInfoFour ? (
                          <ProgressBarAndroid
                            style={{width: 20, height: 20, color: '#3467FF'}}
                          />
                        ) : (
                          <Image
                            source={require('../assets/confirmInfo.png')}
                            style={{width: 17, height: 17}}
                          />
                        )}
                      </View>
                      <View>
                        <Text style={styles.exampleText}>
                          4. Review completed
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {approval && (
                <View style={styles.approval}>
                  <Text style={styles.approvalHeader}>Congratulations !</Text>
                  <Text style={styles.approvalText}>
                    Your submission has been approved and we are working on the
                    process to get your account loan limit from hustler fund
                    extended to Ksh 1,500. To proceed you will be required to
                    make slight refundable payment of ksh 300. if the process
                    fails you will be refunded your amount in 3 days. Thank you
                    for choosing HustlerHack.
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => submitApproval()}>
                    <Text style={styles.buttonCloseText}>Okay</Text>
                  </Pressable>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Continue to submit your application for hustler fund loan
                extention to Ksh 1,500
              </Text>
              <View style={styles.modalBtn}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => modalOpen()}>
                  <Text style={styles.buttonCloseText}>Okay</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </Modal>
      <View style={styles.mainbtn}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.getMoneyText}>Get Money</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GetMoneyModal;

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

  modalText: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },

  button: {
    borderWidth: 2,
    borderColor: '#3467FF',
    borderRadius: 40,
    width: 142,
  },

  modalBtn: {
    alignItems: 'center',
  },

  mainbtn: {
    alignItems: 'center',
    marginVertical: 30,
    display: 'flex',
    justifyContent: 'center',
  },

  buttonOpen: {
    backgroundColor: '#E4EAFF',
    alignItems: 'center',
  },
  buttonClose: {
    alignItems: 'center',
    backgroundColor: '#3467FF',
  },
  buttonCloseText: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#ffffff',
  },

  getMoneyText: {
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'center',
    paddingVertical: 9,
    color: '#3467FF',
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

  approval: {
    alignItems: 'center',
  },
  approvalHeader: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 700,
    color: '#32C35B',
    marginBottom: 10,
    textAlign: 'center',
  },

  approvalText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 700,
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },
});
