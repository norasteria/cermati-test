import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import moment from "moment";
import styled from "styled-components";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import {
  faPaintBrush,
  faBullhorn,
  faChartLine,
  faThList,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import BannerWrapper from "../components/Banner";
import Card, { CardGroupWrapper } from "../components/Cards";
import { ModalConsentCookie, ModalNewsletterSubs } from "../components/Modal";

const cardData = [
  {
    title: "Consult",
    desc:
      "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social imapct low-hanging fruit. Save the world compelling recolutionary progress.",
    icon: faComments,
  },
  {
    title: "Marketing",
    desc:
      "Peacfule; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective alturism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.",
    icon: faBullhorn,
  },
  {
    title: "Design",
    desc:
      "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.",
    icon: faPaintBrush,
  },
  {
    title: "Manage",
    desc:
      "Change-maker innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimis, effective altruism invest optimism corporate social.",
    icon: faThList,
  },
  {
    title: "Develop",
    desc:
      "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunies of thought provoking.",
    icon: faCubes,
  },
  {
    title: "Evolove",
    desc:
      "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altrium. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.",
    icon: faChartLine,
  },
];

const TitleWrapper = styled.div`
  margin: 50px auto 30px;
  max-width: 600px;
  text-align: center;
`;

const NewsPanelFooter = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  input {
    margin: unset;
  }

  button {
    margin-top: 10px;
    width: 100%;
  }

  @media (min-width: 600px){
    display: flex;

    button {
      width: 150px;
      margin: unset;
    }

    input {
      margin-right: 20px;
    }
  }
`

const IndexPage: React.FC<PageProps> = () => {
  const [cookieModalShow, setCookieModalShow] = useState(true);
  const [newsModal, setNewsModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNewsModal(true);
    }, 1000);

    () => {
      clearTimeout(setTimeout(() => {
        setNewsModal(true);
      }, 1000))
    }
  }, []);

  const onCookieOk = () => {
    setCookieModalShow(false);
  };

  const onCloseNewsletter = () => {
    setNewsModal(false);
    setTimeout(() => {
      localStorage.setItem("closeNewsTime", moment().format())
    }, 1000) // save after animation finished
  };

  return (
    <>
      <Layout>
        <BannerWrapper>
          <p style={{ fontSize: 30 }}>Hello ! I'm Nora Asteria</p>
          <p style={{ fontSize: 20, fontWeight: 700 }}>
            Consult, Design, and Develop Website
          </p>
          <p style={{ fontSize: 16, fontWeight: 200, marginBottom: 30 }}>
            Have something great in mind? Feel free to contact me. I'll help you
            make it happen.
          </p>
          <Button styleType="outline-hover-white">
            <b>LET'S MAKE CONTACT</b>
          </Button>
        </BannerWrapper>
        <TitleWrapper>
          <b style={{ fontSize: 20 }}>How Can I Help You?</b>
          <p>
            Our work then targeted, best practices outcomes social innovation
            synergy. Venture philantropy, revolutionary inclusive policymaker
            relief. User-centered program areas scale
          </p>
        </TitleWrapper>
        <CardGroupWrapper>
          {cardData.map((data) => (
            <Card
              key={data.title}
              title={data.title}
              desc={data.desc}
              icon={data.icon}
            />
          ))}
        </CardGroupWrapper>
      </Layout>


      <ModalConsentCookie visible={cookieModalShow}>
        <div style={{ paddingRight: 10 }}>
          By accessing and using this website, you acknowledge that you have
          read and understand our <a href="#">Cookie Policy</a>,{" "}
          <a href="#">Privacy Policy</a>, and our{" "}
          <a href="#">Term of Service</a>.
        </div>
        <Button styleType="blue" onClick={onCookieOk} width="100px">
          Got it
        </Button>
      </ModalConsentCookie>
      <ModalNewsletterSubs
        title="Get latest updates in web technologies"
        visible={newsModal}
        onClose={onCloseNewsletter}
      >
        I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more, Sign up to newsletter to get them all.

        <NewsPanelFooter>
          <Input placeholder="Email address" />
          <Button styleType="orange" >
            <b>Count me  in!</b>
          </Button>
        </NewsPanelFooter>
      </ModalNewsletterSubs>
    </>
  );
};

export default IndexPage;
