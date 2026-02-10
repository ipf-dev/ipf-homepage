import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Translation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../layouts/responsive';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import img_arrow_left from '../assets/images/Career/img_arrow_left.png';
import img_arrow_left_2x from '../assets/images/Career/img_arrow_left@2x.png';
import img_arrow_right from '../assets/images/Career/img_arrow_right.png';
import img_arrow_right_2x from '../assets/images/Career/img_arrow_right@2x.png';
import img_interviewee_jrlee from '../assets/images/Career/interviewee/img_jrlee.png';
import img_interviewee_jrlee_2x from '../assets/images/Career/interviewee/img_jrlee@2x.png';
import img_interviewee_sseo from '../assets/images/Career/interviewee/img_sseo.png';
import img_interviewee_sseo_2x from '../assets/images/Career/interviewee/img_sseo@2x.png';
import img_interviewee_bson from '../assets/images/Career/interviewee/img_bson.png';
import img_interviewee_bson_2x from '../assets/images/Career/interviewee/img_bson@2x.png';
import img_interviewee_sychoi from '../assets/images/Career/interviewee/img_sychoi.png';
import img_interviewee_sychoi_2x from '../assets/images/Career/interviewee/img_sychoi@2x.png';
import img_interviewee_blee from '../assets/images/Career/interviewee/img_blee.png';
import img_interviewee_blee_2x from '../assets/images/Career/interviewee/img_blee@2x.png';
import img_interviewee_hongjinkim from '../assets/images/Career/interviewee/img_hongjinkim.png';
import img_interviewee_hongjinkim_2x from '../assets/images/Career/interviewee/img_hongjinkim@2x.png';
import img_interviewee_hhong from '../assets/images/Career/interviewee/img_hhong.png';
import img_interviewee_hhong_2x from '../assets/images/Career/interviewee/img_hhong@2x.png';
import img_interviewee_isjang from '../assets/images/Career/interviewee/img_isjang.png';
import img_interviewee_isjang_2x from '../assets/images/Career/interviewee/img_isjang@2x.png';
import img_interviewee_sshin from '../assets/images/Career/interviewee/img_sshin.png';
import img_interviewee_sshin_2x from '../assets/images/Career/interviewee/img_sshin@2x.png';
import img_interviewee_bspark from '../assets/images/Career/interviewee/img_bspark.png';
import img_interviewee_bspark_2x from '../assets/images/Career/interviewee/img_bspark@2x.png';
import img_interviewee_dssong from '../assets/images/Career/interviewee/img_dssong.png';
import img_interviewee_dssong_2x from '../assets/images/Career/interviewee/img_dssong@2x.png';
import img_interviewee_jelee from '../assets/images/Career/interviewee/img_jelee.png';
import img_interviewee_jelee_2x from '../assets/images/Career/interviewee/img_jelee@2x.png';

const InterviewData = [
  {
    profile: 'jrlee',
    title: <Translation>{(t) => t('INTVW-JRLEE-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-JRLEE-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_jrlee,
      x2: img_interviewee_jrlee_2x,
    },
  },
  {
    profile: 'sseo',
    title: <Translation>{(t) => t('INTVW-SSEO-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-SSEO-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_sseo,
      x2: img_interviewee_sseo_2x,
    },
  },
  {
    profile: 'bson',
    title: <Translation>{(t) => t('INTVW-BSON-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-BSON-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_bson,
      x2: img_interviewee_bson_2x,
    },
  },
  {
    profile: 'sychoi',
    title: <Translation>{(t) => t('INTVW-SYCHOI-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-SYCHOI-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_sychoi,
      x2: img_interviewee_sychoi_2x,
    },
  },
  {
    profile: 'blee',
    title: <Translation>{(t) => t('INTVW-BLEE-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-BLEE-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_blee,
      x2: img_interviewee_blee_2x,
    },
  },
  {
    profile: 'hongjinkim',
    title: <Translation>{(t) => t('INTVW-HONGJINKIM-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-HONGJINKIM-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_hongjinkim,
      x2: img_interviewee_hongjinkim_2x,
    },
  },
  {
    profile: 'hhong',
    title: <Translation>{(t) => t('INTVW-HHONG-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-HHONG-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_hhong,
      x2: img_interviewee_hhong_2x,
    },
  },
  {
    profile: 'isjang',
    title: <Translation>{(t) => t('INTVW-ISJANG-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-ISJANG-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_isjang,
      x2: img_interviewee_isjang_2x,
    },
  },
  {
    profile: 'sshin',
    title: <Translation>{(t) => t('INTVW-SSHIN-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-SSHIN-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_sshin,
      x2: img_interviewee_sshin_2x,
    },
  },
  {
    profile: 'bspark',
    title: <Translation>{(t) => t('INTVW-BSPARK-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-BSPARK-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_bspark,
      x2: img_interviewee_bspark_2x,
    },
  },
  {
    profile: 'dssong',
    title: <Translation>{(t) => t('INTVW-DSSONG-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-DSSONG-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_dssong,
      x2: img_interviewee_dssong_2x,
    },
  },
  {
    profile: 'jelee',
    title: <Translation>{(t) => t('INTVW-JELEE-TITLE')}</Translation>,
    quote: <Translation>{(t) => t('INTVW-JELEE-QUOTE')}</Translation>,
    imgSrc: {
      x1: img_interviewee_jelee,
      x2: img_interviewee_jelee_2x,
    },
  },
];

const CarouselProviderStyled = styled(CarouselProvider)`
  background-color: ${colors.gray1};
  padding: 5.6rem 0;

  @media ${responsive.conditionForTablet} {
    /* padding: 5.6rem calc((100% - 70.4rem) / 2); */
    padding: 3.5rem calc((100% - 70.4rem) / 2);
    padding-bottom: 0;
  }

  @media ${responsive.conditionForDesktop} {
    padding: 4rem calc((100% - 96rem) / 2);
    padding-bottom: 0;
  }
`;

const Profile = styled.span<{ imgSrc: { x1: string; x2: string } }>`
  align-self: center;
  width: 8rem;
  height: 8rem;
  background-size: cover;

  background-image: url(${({ imgSrc }) => imgSrc.x1});
  @media ${high_resolution} {
    background-image: url(${({ imgSrc }) => imgSrc.x2});
  }
`;

const SliderStyled = styled(Slider)`
  width: 100%;
  height: 33.4rem;

  @media ${responsive.conditionForTablet} {
    height: 28.6rem;
  }

  @media ${responsive.conditionForDesktop} {
    height: 24.5rem;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography('body')};
`;

const Quote = styled.p`
  ${Typography('body')};
  text-align: center;
  margin-top: 2.4rem;
  word-break: keep-all;
  white-space: pre-line;
  padding: 0 2rem;

  @media ${responsive.conditionForTablet} {
    padding: 0 8rem;
  }
`;

const Name = styled.p`
  ${Typography('body', 1.4)}
  color: ${colors.gray4};
  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
`;

const BackButtonWeb = styled(ButtonBack)`
  border: none;
  background-color: transparent;

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_left});
  @media ${high_resolution} {
    background-image: url(${img_arrow_left_2x});
  }
`;

const BackButtonMobile = styled(BackButtonWeb)`
  display: block;
  margin-right: 1.2rem;
`;

const NextButtonWeb = styled(ButtonNext)`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_right});
  @media ${high_resolution} {
    background-image: url(${img_arrow_right_2x});
  }
`;

const NextButtonMobile = styled(NextButtonWeb)`
  position: relative;
  margin-left: 1.2rem;
`;

const ButtonWrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.2rem;

  @media ${responsive.conditionForTablet} {
    display: none;
  }
`;

const ButtonWrapperWeb = styled.div`
  display: none;
  width: 100%;
  position: relative;
  bottom: 15rem;

  @media ${responsive.conditionForTablet} {
    display: block;
  }
`;

function Interview() {
  return (
    <CarouselProviderStyled
      naturalSlideWidth={1040}
      naturalSlideHeight={450}
      totalSlides={InterviewData.length}
      infinite
    >
      <SliderStyled>
        {InterviewData.map(({ profile, title, quote, imgSrc }, index) => {
          return (
            <Slide key={profile} index={index}>
              <QuoteContainer>
                <Profile imgSrc={imgSrc} />
                <Quote>
                  {quote}
                  <br />
                </Quote>
                <Name>{title}</Name>
              </QuoteContainer>
            </Slide>
          );
        })}
      </SliderStyled>
      <ButtonWrapperWeb>
        <BackButtonWeb>
          <span />
        </BackButtonWeb>
        <NextButtonWeb>
          <span />
        </NextButtonWeb>
      </ButtonWrapperWeb>
      <ButtonWrapperMobile>
        <BackButtonMobile>
          <span />
        </BackButtonMobile>
        <NextButtonMobile>
          <span />
        </NextButtonMobile>
      </ButtonWrapperMobile>
    </CarouselProviderStyled>
  );
}

export default Interview;
