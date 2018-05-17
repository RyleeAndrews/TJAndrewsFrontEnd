
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../blog/actions.js';
import Blogs from '../blog/blogs.js';
import HomeHeader from '../header/homeHeader.js';
import Footer from '../footer/footer.js';
import './home.scss';


class Dashboard extends React.Component {
  constructor(props){
    super(props);


  }

  render(){


    return(
      <React.Fragment>
        <div className="header">
          <HomeHeader/>

        </div>
        <div className="blogs">
          <Blogs/>
        </div>
      

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blog: state,
});

const mapDispatchToProps = ( dispatch, getState) => ({
  createBlog: blog => dispatch(actions.blogCreate(blog)),
  updateBlog: blog => dispatch(actions.blogUpdate(blog)),
  deleteBlog: blog => dispatch(actions.blogDelete(blog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
