import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {DetailHeader} from '../../components/HeadersButtons/MainHeaders';
import ImageBox from '../../components/detail/ImageBox';
import InfoBox from '../../components/detail/InfoBox';
import {connect} from '../../store/Api';

export default class CharactersDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
    };
  }
  get_detail = async (id) => {
    let res = await connect('get_characters', null, id);
    await this.setState({
      comics: res.results,
    });
  };
  componentDidMount = async () => {
    const {id} = await this.props.route.params.item;
    await this.get_detail(id);
  };
  render() {
    const {
      navigation,
      route: {
        params: {item},
      },
    } = this.props;
    const {comics} = this.state;
    return (
      <View style={styles.container}>
        <DetailHeader
          navigation={navigation}
          leftIcon="back"
          title={item.name}
          background={'red'}
        />
        <ImageBox item={item.thumbnail} />
        <InfoBox item={item} comics={comics} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
