import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import StarRating from 'react-native-easy-rating';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';

const UserScreen = ({navigation, route, data}) => {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);

  useEffect(() => {
    const items = [];
    data.map((item, index) => {
      if (item.select === true) {
        items.push(item);
      }
    });
    setData(items);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {listData.length > 0 ? (
        <View>
          <View style={{margin:20}}>
            <Text style={styles.itemText}>Name : Jithu Poul</Text>
            <Text style={styles.itemText}>Age : 25</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.boxContainer}>
              <View style={styles.item}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: listData[0].image,
                    }}
                    style={styles.itemPhoto2}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={styles.name}>
                  <Text style={styles.itemText}>{listData[0].Brand}</Text>
                  {listData[0].Stars !== undefined &&
                  listData[0].Stars !== null ? (
                    <StarRating
                      rating={listData[0].Stars}
                      max={5}
                      iconWidth={width * 0.03}
                      iconHeight={width * 0.03}
                    />
                  ) : null}
                </View>
                <View style={styles.descStyle}>
                  <Text style={styles.descriptionText}>
                    {listData[0].Variety}
                  </Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.itemText2}>{listData[0].Country}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const mapStateToProps = state => {
  const data = state.saveReducer;
  return {data};
};

export default connect(mapStateToProps, {})(UserScreen);
