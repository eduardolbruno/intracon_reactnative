import React from 'react'
import { withNavigation } from 'react-navigation'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ImageBackground
} from 'react-native'

const { height, width } = Dimensions.get('screen')

class PhoneDetail extends React.Component {
  render() {
    const data = this.props.data

    return (
      <View style={styles.container}>
        <ImageBackground
          style={[styles.imageBG]}
          imageStyle={{ opacity: 0.5 }}
          source={{ uri: data.image }}>
          <View style={styles.header}>
            <Text style={styles.txtVendor}>{data.vendor}</Text>
            <Text style={styles.txtModel}>{data.name}</Text>
          </View>
          <View style={styles.specs}>
            <Text style={styles.txtSpecs}>Camera: {data.camera}</Text>
            <Text style={styles.txtSpecs}>{data.memory}</Text>
            <Text style={styles.txtSpecs}>Display: {data.display}</Text>
            <Text style={styles.txtSpecs}>Battery: {data.battery}</Text>
            <Text style={styles.txtSpecs}>{data.os}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  txtVendor: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: '100'
  },
  txtModel: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width / 3
  },
  specs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSpecs: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '200'
  },
  logo: {
    width: 66,
    height: 58
  },
  imageBG: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)'
  }
})

export default withNavigation(PhoneDetail)
