import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import NativeAdView from 'react-native-admob-native-ads';
import {
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
} from '@react-native-firebase/admob';

export default function Details(props) {
  const navigation = useNavigation();
  const data = props.route.params.props;
  console.log(data);
  // const nativeAdViewRef = useRef();

  // React.useEffect(() => {
  //   nativeAdViewRef.current?.loadAd();
  // }, []);

  InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

  RewardedAd.createForAdRequest(TestIds.REWARDED);

  return (
    <View style={style.container}>
      <View style={style.cont1}>
        <TouchableOpacity
          style={style.but}
          onPress={() => {
            navigation.push('Home');
          }}>
          <Ant name="left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 32, color: 'black'}}>{data.Tit}</Text>
        <View style={style.but2}>
          <Ant name="left" size={20} color={'white'} />
        </View>
      </View>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          Tags For Headers
        </Text>
      </View>
      <View style={style.cont2}>
        <View style={style.buts1}>
          <TouchableOpacity>
            <Text>Lesson</Text>
          </TouchableOpacity>
        </View>
        <View style={style.buts2}>
          <TouchableOpacity>
            <Text>Tests</Text>
          </TouchableOpacity>
        </View>
        <View style={style.buts3}>
          <TouchableOpacity>
            <Text>Discuss</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Image source={data.Image} />
      </View>
      <View>
        <Text style={style.txtb}>Introduction</Text>
        <Text style={style.isi}>{data.intro}</Text>
      </View>

      <BannerAd unitId={TestIds.BANNER} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  but: {
    height: wp('15%'),
    width: wp('15%'),
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BEBAB3',
  },
  but2: {
    height: wp('15%'),
    width: wp('15%'),
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buts1: {
    backgroundColor: '#F8F2EE',
    height: hp('5%'),
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 15,
    borderTopStartRadius: 15,
  },
  buts2: {
    backgroundColor: '#F8F2EE',
    height: hp('5%'),
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buts3: {
    backgroundColor: '#F8F2EE',
    height: hp('5%'),
    width: wp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  cont1: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  txtb: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  isi: {
    textAlign: 'justify',
    color: 'black',
  },
});
