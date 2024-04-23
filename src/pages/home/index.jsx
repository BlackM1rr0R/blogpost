import React from "react";
import Wrapper from "../../components/UI/wrapper";
import Container from "../../components/UI/container";
import LeftSide from "../../components/leftside";
import styles from "./index.module.css";
import RightSide from "../../components/rightside";
const Home = () => {
  return (
    <div className={styles.home}>
      <Wrapper>
        <div className={styles.left}>
          <Container>
            <LeftSide />
          </Container>
        </div>
        <div className={styles.right}>

        <Container position="right">
          <RightSide />
        </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
