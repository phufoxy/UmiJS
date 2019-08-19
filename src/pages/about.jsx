import React, { Component } from 'react';
import { connect } from 'dva';
import { TableComponent, FormComponent } from '../components';
import * as actions from '../actions/posts';
class AboutPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      views: 'TABLE',
    };
  }
  onChangerView = () => {
    if (this.state.views === 'TABLE') {
      this.setState({
        views: 'FORM',
        edit: false,
      });
    } else {
      this.setState({
        views: 'TABLE',
        edit: false,
      });
    }
  };
  onRemove = id => {
    this.props.onRemove(id);
  };
  onAdd = data => {
    this.props.onAdd(data);
    this.setState({
      views: 'TABLE',
    });
  };
  onEdit = id => {
    this.setState({
      views: 'FORM',
      dataEdit: this.props.posts.filter(item => item.id === id)[0],
      edit: true,
    });
  };
  onUpdate = data => {
    this.props.editPosts(data);
    this.setState({
      views: 'TABLE',
    });
  };
  render() {
    const { posts, loading } = this.props;
    const { views } = this.state;
    const View = () => {
      if (views === 'TABLE') {
        return (
          <TableComponent
            data={posts.reverse()}
            onChangerView={this.onChangerView}
            loading={loading}
            onRemove={this.onRemove}
            onEdit={this.onEdit}
          />
        );
      } else {
        return (
          <FormComponent
            onChangerView={this.onChangerView}
            onAdd={this.onAdd}
            dataEdit={this.state.dataEdit}
            edit={this.state.edit}
            onUpdate={this.onUpdate}
          />
        );
      }
    };
    return <div>{View()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  };
};
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.deletePosts(id)),
  onAdd: data => dispatch(actions.addPosts(data)),
  editPosts: data => dispatch(actions.editPosts(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
