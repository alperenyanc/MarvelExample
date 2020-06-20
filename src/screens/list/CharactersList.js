import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import {connect} from '../../store/Api';
import axios from 'axios';
import {inject, observer} from 'mobx-react';
import ListItem from '../../components/list/ListItem';
@inject('app')
@observer
export default class CharactersList extends Component {
  constructor(props) {
    super(props);
  }
  get_list = async (limit) => {
    const {app} = this.props;
    let res = await connect('get_characters', limit);
    app.setData(res.results);
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
        <View style={styles.headerBox}>
          <Text style={styles.headerTitle}>Marvel Characters</Text>
        </View>
        <FlatList
          howsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={(item,index) => index.toString()}
        />
        <Button
          onPress={() => navigation.navigate('CharactersDetail')}
          title=" go to detail "
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
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
