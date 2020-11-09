import React, {Component} from 'react';
import {Colors} from '../Styles/Colors';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';

const Loader = (props) => {
  const {loading} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <View>
            <ActivityIndicator
              size="large"
              color={Colors.blue}
              animating={loading}
            />
            <Text style={{color: Colors.blue, marginTop: 25}}>
              Logging In...
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.transparent,
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.darkGray,
    height: 110,
    width: 100,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
