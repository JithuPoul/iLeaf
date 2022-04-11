import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '00'];
const operators = ['/', 'X', '-', '+', '='];
const functions = ['C', '+/-', '%'];

const Calculator = () => {
  const [textValue, setTextValue] = useState('');
  const [modalVis, setmodalVis] = useState(false);

  const onClick = item => {
    if (item !== 'C' && item !== '+/-' && item !== '%' && item !== '=') {
      let value = textValue;
      let newValue = `${value}${item}`;
      setTextValue(newValue);
    } else if (item === '=' && textValue === '1+3+9') {
      setmodalVis(true);
    } else if (item === 'C') {
      setTextValue('');
    }
  };

  const functionDisplay = () => {
    return functions.map(item => {
      return (
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            onClick(item);
          }}>
          <Text style={styles.textStyle}>{item}</Text>
        </TouchableOpacity>
      );
    });
  };

  const numberDisplay = () => {
    return (
      <FlatList
        numColumns={3}
        data={digits}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.box2}
            onPress={() => {
              onClick(item);
            }}>
            <Text style={styles.textStyle}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const operatorDisplay = () => {
    return (
      <FlatList
        style={styles.flatStyle}
        data={operators}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              onClick(item);
            }}
            style={index === operators.length - 1 ? styles.equal : styles.box2}>
            <Text style={styles.textStyle}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.fullview}>
        <View style={styles.flexView1}>
          <Text style={styles.textInput}>{textValue}</Text>
        </View>
        <View style={styles.flexView2}>
          <View style={styles.numberfunctView}>
            <View style={styles.rowStyle}>{functionDisplay()}</View>
            {numberDisplay()}
          </View>
          <View style={styles.operatorView}>{operatorDisplay()}</View>
        </View>
        <Modal
          style={styles.modalstyle}
          backdropColor="transparent"
          animationIn='fadeIn'
          animationOut='fadeOut'
          transparent={true}
          isVisible={modalVis}
          onRequestClose={() => {
            setmodalVis(!modalVis);
          }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World</Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullview: {
    height: height,
    width: width,
    backgroundColor: '#3E403F',
  },
  flexView1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flexView2: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: '#363636',
    borderTopWidth: 1,
    paddingTop: width * 0.03,
    paddingBottom: width * 0.03,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
  },
  numberfunctView: {
    width: width * 0.65,
    height: height * 0.5,
  },
  operatorView: {
    width: width * 0.17,
    height: height * 0.5,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.04,
    paddingTop: height * 0.01,
  },
  equal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.01,
    marginHorizontal: width * 0.03,
    backgroundColor: '#FAF5BE',
    borderRadius: width * 0.3,
  },
  textStyle: {
    fontSize: width * 0.07,
    color: '#9C9E9D',
  },
  textInput: {
    fontSize: width * 0.1,
    color: '#9C9E9D',
    marginVertical: height * 0.03,
    marginHorizontal: width * 0.13,
  },
  rowStyle: {
    height: height * 0.1,
    padding: width * 0.02,
    flexDirection: 'row',
  },
  flatStyle: {
    paddingTop: height * 0.01,
    backgroundColor: '#363636',
    borderRadius: width * 0.4,
    marginBottom: height * 0.02,
  },
  modalView: {
    height: height * 0.39,
    width: width * 0.75,
    backgroundColor: '#9C9E9D',
    borderRadius: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalstyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText:{
    fontSize: width * 0.08,
    color: '#FFF',
  }
});

export default Calculator;
