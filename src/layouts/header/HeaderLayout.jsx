import React, { Component } from "react";
import { Icon } from "antd";
import styles from "./header.scss"; //CSS Modules
class HeaderLayout extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.block}>
          <div className={styles.blockLeft}>
            <div className={styles.logo}>
              <a href="/" className={styles.logoLink}>
                <Icon type="ant-design" /> Ant
              </a>
            </div>
          </div>
          <div className={styles.blockRight}>
            <nav className={styles.menu}>
              <ul>
                <li className={styles.item}>
                  <a href="/" className={styles.itemLink}>
                    <Icon type="shop" className={styles.itemIcon} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLayout;
