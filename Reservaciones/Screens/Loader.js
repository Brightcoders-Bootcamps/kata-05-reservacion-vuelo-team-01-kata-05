import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../Styles/Colors';
import {Texts} from '../ContentText/Texts';

const Loader = (props) => {
  const {loading,text} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <View>
            <ActivityIndicator
              size="large"
              color={Colors.blue}
              animating={loading}
            />
            <Text style={{color: Colors.blue, marginTop: 25}}>
              {text}
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

Loader.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string
};

export default Loader;
