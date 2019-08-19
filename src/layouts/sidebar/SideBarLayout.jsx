import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './sidebar.scss';
import { NavLink } from 'dva/router';
class SideBarLayout extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.item}>
          <NavLink to="/" exact activeClassName={styles.itemActive} className={styles.itemLink}>
            <Icon type="dashboard" className={styles.itemIcon} />
            <span style={styles.iconContent}>Dashoard</span>
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/about"
            exact
            activeClassName={styles.itemActive}
            className={styles.itemLink}
          >
            <Icon type="shop" className={styles.itemIcon} />
            <span style={styles.iconContent}>Posts</span>
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/contact"
            exact
            activeClassName={styles.itemActive}
            className={styles.itemLink}
          >
            <Icon type="credit-card" className={styles.itemIcon} />
            <span style={styles.iconContent}>Contact</span>
          </NavLink>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="layout" className={styles.itemIcon} />
            <span style={styles.iconContent}>Layout</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="appstore" className={styles.itemIcon} />
            <span style={styles.iconContent}>Ui Kit</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="form" className={styles.itemIcon} />
            <span style={styles.iconContent}>Forms</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="table" className={styles.itemIcon} />
            <span style={styles.iconContent}>Table</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="notification" className={styles.itemIcon} />
            <span style={styles.iconContent}>Feedback</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="calendar" className={styles.itemIcon} />
            <span style={styles.iconContent}>Calender</span>
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.itemLink}>
            <Icon type="file" className={styles.itemIcon} />
            <span style={styles.iconContent}>Pages</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBarLayout;
