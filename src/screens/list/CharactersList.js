import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from '../../store/Api';
import {inject, observer} from 'mobx-react';
import ListItem from '../../components/list/ListItem';
import {imagesHeader} from '../../assets/images';
import {textStyles} from '../../assets/style/main';
import {MainHeader} from '../../components/HeadersButtons/MainHeaders';

@inject('app')
@observer
export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    // comment for dif 1
    this.state = {
      is_loadingMore: true,
      is_lastItem: false,
    };
  }
  // comment 2
  get_list = async (limit) => {
    const {app} = this.props;
    let res = await connect('get_characters', limit);
    if (res) {
      await this.setState({
        is_loadingMore: false,
      });
    }
    app.setData(res.results);
  };
  //comment
  getMoreLists = async () => {
    await this.setState({
      is_loadingMore: true,
    });
    const {app} = await this.props;
    let limit = (await app.limit) + 10;
    if (limit == 110) {
      await this.setState({
        is_loadingMore: false,
        is_lastItem: true,
      });
    } else {
      await app.setLimit(limit);
      await this.get_list(limit);
    }
  };
  renderFooter = () => {
    if (this.state.is_loadingMore) {
      return (
        <View
          style={{
            paddingVertical: 20,
          }}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else if (this.state.is_lastItem) {
      return (
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Text>last item</Text>
        </View>
      );
    } else {
      return <View />;
    }
  };
  componentDidMount = async () => {
    const {app} = this.props;
    let limit = app.limit;
    this.get_list(limit);
  };

  render() {
    const {navigation, app} = this.props;
    let data = app.data;
    return (
      <View style={styles.container}>
        <MainHeader navigation={navigation} title="Marvel Characters" />

        <FlatList
          numColumns={2}
          howsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <ListItem navigation={navigation} item={item} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={this.getMoreLists}
          ListFooterComponent={this.renderFooter}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 16,
    alignSelf: 'center',
  },
});
