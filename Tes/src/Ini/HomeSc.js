import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Img1 from '../image/Course1.png';
import Img2 from '../image/Course2.png';
import Img3 from '../image/Course3.png';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from '@invertase/react-native-google-ads';

export default function HomeSc(props) {
  const navigation = useNavigation();
  // const adUnitId = __DEV__
  //   ? TestIds.INTERSTITIAL
  //   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  // const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  //   requestNonPersonalizedAdsOnly: true,
  //   keywords: ['fashion', 'clothing'],
  // });
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const eventListener = interstitial.onAdEvent(type => {
  //     if (type === AdEventType.LOADED) {
  //       setLoaded(true);
  //     }
  //   });

  //   // Start loading the interstitial straight away
  //   interstitial.load();

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     eventListener();
  //   };
  // }, []);

  // // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  const dats = [
    {
      tit: '#CSS',
    },
    {
      tit: '#UX',
    },
    {
      tit: '#Swift',
    },
    {
      tit: '#UI',
    },
    {
      tit: '#HTML',
    },
  ];
  const File = [
    {
      Id: 1,
      Image: Img1,
      time: '3 h 30 min ',
      Tit: 'UI',
      Det: 'Advanced mobile interface design',
      pay: '$50',
      intro:
        "You can launch a new career in web development today by learning HTML & CSS. You dont need a computer science degree or expensive software. All you need is a computer, a bit of time,a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.",
    },
    {
      Id: 2,
      Image: Img2,
      time: '3 h 30 min ',
      Tit: 'CSS',
      Det: 'Advanced mobile interface design',
      pay: '$50',
      intro:
        "You can launch a new career in web development today by learning HTML & CSS. You dont need a computer science degree or expensive software. All you need is a computer, a bit of time,a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.",
    },
    {
      Id: 3,
      Image: Img3,
      time: '3 h 30 min ',
      Tit: 'UX',
      Det: 'Advanced mobile interface design',
      pay: '$50',
      intro:
        "You can launch a new career in web development today by learning HTML & CSS. You dont need a computer science degree or expensive software. All you need is a computer, a bit of time,a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.",
    },
  ];

  return (
    <View style={style.container}>
      <View style={style.conbel}>
        <View>
          <Text style={style.txtH}>Hello,</Text>
          <Text style={style.TxtBn}>Juana Antonieta</Text>
        </View>
        <TouchableOpacity style={style.belbut}>
          <Image source={require('../image/Icon.png')} style={style.mages} />
        </TouchableOpacity>
      </View>
      <View style={style.scon}>
        <TextInput placeholder="Search course " style={style.int} />
        <Image source={require('../image/Cons.png')} style={style.mages2} />
      </View>
      <View style={style.concat}>
        <Text style={style.cat}>Category :</Text>
        <FlatList
          data={dats}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={data => {
            return (
              <View style={{flex: 1}}>
                <View style={style.condat}>
                  <Text style={style.catss}>{data.item.tit}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={style.flats}>
        <FlatList
          data={File}
          showsVerticalScrollIndicator={false}
          renderItem={data => {
            return (
              <View style={{flex: 1}} navigation={navigation}>
                <View style={style.conf}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('Details', {
                          props: data.item,
                        });
                        // interstitial.show();
                      }}>
                      <Image source={data.item.Image} style={style.ims} />
                    </TouchableOpacity>
                  </View>
                  <View style={style.tits}>
                    <Text style={style.txt1}>{data.item.time}</Text>
                    <Text style={style.txt2}>{data.item.Tit}</Text>
                    <Text style={style.txt3}>{data.item.Det}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  conbel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtH: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  TxtBn: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  belbut: {
    height: wp('15%'),
    width: wp('15%'),
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BEBAB3',
  },
  mages: {
    height: hp('3%'),
    width: wp('5%'),
    resizeMode: 'stretch',
  },
  mages2: {
    height: hp('3%'),
    width: wp('7%'),
    resizeMode: 'cover',
  },
  scon: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    marginVertical: 20,
    borderColor: 'grey',
  },
  int: {lineHeight: 16, width: wp('75%')},
  ims: {height: hp('30%'), width: wp('89%'), resizeMode: 'stretch'},
  conf: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#BEBAB3',
    width: wp('89.4%'),
    backgroundColor: 'white',
  },
  tits: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  txt1: {
    color: '#5BA092',
    fontWeight: 'bold',
  },
  txt2: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
  },
  txt3: {
    color: 'black',
    fontSize: 14,
  },
  flats: {
    flex: 1,
    paddingVertical: 5,
  },
  cat: {color: 'black', fontSize: 14, fontWeight: 'bold', marginRight: 5},
  catss: {
    color: 'white',
  },
  concat: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  condat: {
    backgroundColor: '#65AAEA',
    marginHorizontal: 10,
    width: wp('15%'),
    alignItems: 'center',
    borderRadius: 20,
  },
});
