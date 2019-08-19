import React, { Component } from "react";
import { Icon } from "antd";
import styles from "./footer.scss";
class FooterLayout extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.block}>
          <div className={styles.blockLeft}>
            <div className={styles.content}>
              <p className={styles.contentNorm}>
                <Icon type="question" className={styles.contentIcon} />
                Help & Support
              </p>
            </div>
          </div>
          <div className={styles.blockRight}>
            <div className={styles.content}>
              <p className={styles.contentNorm}>© 2019 ANT</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLayout;
