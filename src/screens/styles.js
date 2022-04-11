import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',

  },
 buttonContainer: {
    marginTop: height * 0.002,
    width: width * 0.2,
    height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    padding: '1%',
  },
  buttonContainer2: {
    marginTop: height * 0.03,
    width: width * 0.5,
    height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    padding: '1%',
  },
  boxContainer: {
    paddingTop: height * 0.01,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin:height*0.01,
    borderRadius:10,
  },
  boxContainer2: {
    paddingTop: height * 0.01,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical:height*0.3,
    marginHorizontal:height*0.01,
    borderRadius:10,
  },
  item: {
    margin: width * 0.02,
    marginBottom: height * 0.01,
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  listContainer: {
    marginTop: height * 0.01,
    flex: 1,
  },
  name: {
    height: height * 0.06,
    width: width * 0.9,
    alignItems:'flex-start',
  },
  name3: {
    height: height * 0.06,
    width: width * 0.9,
    alignItems:'center',
  },
  name2: {
    alignItems:'flex-start',
  },
  loaderContainer: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  indicator: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.03,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: width * 0.01,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    width: width * 0.4,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'bold',
  },
  titleText: {
    color: 'black',
    margin:width * 0.01 ,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight:'bold',
    fontSize:width * 0.06,
  },
  itemText2:{
    color: '#FAA311',
    marginTop: 5,
    width: width * 0.4,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
  descStyle:{
    paddingVertical:width*0.002,
  },
  descriptionText: {
    color:'black',
    width: width * 0.9,
    textAlign: 'left',
  },
  descriptionText2: {
    color:'black',
    width: width * 0.9,
    textAlign: 'left',
    marginVertical:width * 0.02,
  },
  sectionList: {
    paddingLeft: width * 0.03,
    paddingRight: width * 0.03,
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
  },
});

export default styles;
