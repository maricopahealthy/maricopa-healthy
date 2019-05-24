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
            // data={[
            //   {
            //     key: 0,
            //     title: "AZ Health Zone",
            //     description: "Discover ways to stay active and eat healthy each and every day.",
            //     image: require("../../assets/thumbnails/resources/resources-thumb-placeholder-01.png")
            //   },
            //   {
            //     key: 1,
            //     title: "Maricopa WIC",
            //     description: "Teaser Text goes here and is truncated...",
            //     image: require("../../assets/thumbnails/resources/resources-thumb-placeholder-02.png")
            //   },
            //   {
            //     key: 2,
            //     title: "Find Help Phoenix",
            //     description: "Teaser Text goes here and is truncated...",
            //     image: require("../../assets/thumbnails/resources/resources-thumb-placeholder-03.png")
            //   }
            // ]}
            data={this.props.resources}
            renderItem={({item, index}) => <ResourceListItem item={item} index={index}/>}
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