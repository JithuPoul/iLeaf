import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  LogBox,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import StarRating from 'react-native-easy-rating';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
import {fetchDetailsbyUser} from '../api/helper';

const DetailsScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(route.params.index);
  const isFocused = useIsFocused();
  const [listData, setData] = useState('');

  useEffect(() => {
    fetchResDetailsUserId();
  }, [isFocused]);

  const fetchResDetailsUserId = async () => {
    setLoading(true);
    console.log('value', value);
    const packages = await fetchDetailsbyUser(value);
    if (packages !== '') {
      console.log('packages', packages);
      setData(packages);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(listData, 'listData');
  }, [listData]);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={styles.listContainer}>
        <View style={styles.boxContainer2}>
          <View style={styles.item}>
            <View style={styles.name2}>
              <Text style={styles.itemText}>User Id : {listData.userId}</Text>
            </View>
            <View style={styles.descStyle}>
              <Text style={styles.descriptionText2}>
                <Text style={styles.itemText}> Title : </Text>
                {listData.title}
              </Text>
            </View>
            <View style={styles.descStyle}>
              <Text style={styles.descriptionText2}>
                <Text style={styles.itemText}> Body : </Text>
                {listData.body}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
