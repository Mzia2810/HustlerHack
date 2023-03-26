import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LibCarousel from 'react-native-snap-carousel'
let MESSAGES = [
    {
        number: '07######98',
        amount: ' ksh 1,500',
        message: `has successfully extended hustler fund loan limit to`
    },

    {
        number: '07######98',
        amount: ' ksh 1,500',
        message: `has successfully extended hustler fund loan limit to`
    },

    {
        number: '07######98',
        amount: ' ksh 1,000',
        message: `has successfully extended hustler fund loan limit to`
    },

    {
        number: '07######09',
        amount: ' ksh 1,500',
        message: `has successfully extended hustler fund loan limit to`
    },

    {
        number: '07######98',
        amount: ' ksh 2,000',
        message: `has successfully extended hustler fund loan limit to`
    },

]
const Carousel = () => {

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#32C35B', fontSize: 12,  }}>{item.number}{' '}</Text>
                    <Text style={{ color: '#000', fontSize: 12,  }}>{item.message}</Text>
                    <Text style={{ color: '#3467FF', fontSize: 12,  }}>{item.amount}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#32C35B', fontSize: 12,  }}>{item.number}{' '}</Text>
                    <Text style={{ color: '#000', fontSize: 12,  }}>{item.message}</Text>
                    <Text style={{ color: '#3467FF', fontSize: 12,  }}>{item.amount}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#32C35B', fontSize: 12,  }}>{item.number}{' '}</Text>
                    <Text style={{ color: '#000', fontSize: 12,  }}>{item.message}</Text>
                    <Text style={{ color: '#3467FF', fontSize: 12,  }}>{item.amount}</Text>
                </View>
            </View>
        );
    }

    return (

        <LibCarousel
            // layout='tinder'
            // numColumns={2}
            // style={{
            //     backgroundColor: "green"
            // }}
            // snapToAlignment='center'
            // activeSlideOffset={200}

            
            containerCustomStyle={{
                // backgroundColor: "#32C35B",
                width: '90%',
                flexGrow: 1,
                // marginVertical: 8

                // justifyContent:'center',
                // alignItems:'center'
            }}
            slideStyle={{
                borderColor: 'red',
                width: '100%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // height: 40,

            }}
            data={MESSAGES}
            contentContainerStyle={{
                // borderWidth: 1,
                // borderColor: "red",
                justifyContent:'center'

            }}

            renderItem={_renderItem}
            autoplay
            loop
            autoplayInterval={2000}
            // sliderWidth={Dimensions?.get('window').width - 20}
            // itemWidth={100}
            vertical
            itemHeight={80}
            sliderHeight={100}
        />
    )
}

export default Carousel

const styles = StyleSheet.create({})