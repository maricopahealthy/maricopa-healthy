import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {connect} from "react-redux";
import {fetchResources} from "../../actions/resourcesActions";
import ResourceListItem from '../../components/ResourceListItem';

/**
 * Default Resources view displaying list of Resources.
 */
class ResourcesListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchResources();
  }

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.props.resources}
            renderItem={({item, index}) => <ResourceListItem item={item} index={index}/>}
            keyExtractor={(item) => item.id.toString() }
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({resources}) {
  return {
    resources: resources.allIds.map(id => resources.byId[id]),
    isFetching: resources.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchResources: () => dispatch(fetchResources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});