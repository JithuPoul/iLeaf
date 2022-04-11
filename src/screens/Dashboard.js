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
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetails} from '../api/helper';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import StarRating from 'react-native-easy-rating';
const {height, width} = Dimensions.get('window');
import {saveData} from '../redux/actions/action';
import {connect} from 'react-redux';
import {SearchBar} from 'react-native-elements';

const Dashboard = ({navigation, saveData}) => {
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [listData, setData] = useState([]);

  useEffect(() => {
    fetchResDetails();
  }, [isFocused]);

  const fetchResDetails = async () => {
    setLoading(true);
    const packages = await fetchDetails();
    if (packages !== '') {
      setData(packages);
      setLoading(false);
    }
  };

  const godetails = index => {
    console.log(index, 'index');
    navigation.navigate('DetailsScreen', {
      index: index,
    });
  };

  const renderItem = ({item, index}) => (
    <View style={styles.boxContainer}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => godetails(item.userId)}>
          <View style={styles.name}>
            <Text style={styles.itemText}>User Id : {item?.userId}</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.itemText}>Id : {item?.id}</Text>
          </View>
          <View style={styles.descStyle}>
            <Text style={styles.descriptionText}>
              <Text style={styles.itemText}>Title :</Text>
              {item?.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {listData ? (
        <View style={styles.listContainer}>
          <View style={styles.name3}>
            <Text style={styles.titleText}>List of Users</Text>
          </View>
          <FlatList
            data={listData}
            extraData={listData}
            initialNumToRender={5}
            renderItem={(item, index) => renderItem(item, index)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : null}
    </View>
  );
};

export default connect(null, {
  saveData,
})(Dashboard);
