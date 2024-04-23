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
        <Container>
          <LeftSide />
        </Container>
        <Container position="right">
          <RightSide />
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
