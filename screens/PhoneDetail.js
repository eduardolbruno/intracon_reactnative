import React from 'react'
import PhoneDetail from '../components/PhoneDetail'

export class PhoneDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props
    const content = navigation.getParam('content', '')

    return <PhoneDetail data={content.item}></PhoneDetail>
  }
}
