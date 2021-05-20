import React from 'react'
import { withNavigation } from 'react-navigation'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
  FlatList
} from 'react-native'

class PhoneListDetail extends React.Component {
  state = {
    refreshing: true,
    data: []
  }

  // first render
  componentDidMount = async () => {
    // get data from API
    this.getData()
  }

  // get data from API
  getData = async () => {
    // 10.0.2.2 -> host loopback interface ip (you can also use your computer IP )
    fetch('http://10.0.2.2:3000/api/phones')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ data: resJson, refreshing: false })
      })
      .catch(e => console.log(e))
  }

  // item on Flatlist
  renderItemComponent = itemData => {
    return (
      <View style={styles.listItem}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate('Details', {
              content: itemData,
              title: itemData.item.name
            })
          }>
          <View style={styles.listItem}>
            <Image
              source={{ uri: itemData.item.image }}
              style={styles.thumbImage}
            />
            <Text style={styles.item}>{itemData.item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  // used in pull to refresh
  handleRefresh = () => {
    this.setState({ refreshing: false }, () => {
      this.getData()
    })
  }

  render() {
    const { data, refreshing, loading, error } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.infoMsg}>- pull to refresh 🔽 -</Text>
        <FlatList
          data={data}
          renderItem={item => this.renderItemComponent(item)}
          keyExtractor={item => item.id.toString()}
          refreshing={refreshing}
          onRefresh={this.handleRefresh}></FlatList>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 17,
    fontWeight: 'bold'
  },
  listItem: {
    margin: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',

    flexDirection: 'row',
    borderRadius: 5
  },
  thumbImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fafafa'
  },
  infoMsg: {
    alignSelf: 'center',
    color: 'grey'
  }
})

export default withNavigation(PhoneListDetail)
