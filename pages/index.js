import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from "react"
import Header from './Header'
import Profile from './Profile'
import Birds from './BirdsPage'
import Boxes from './Boxespage'
import Texts from './Textpage'

import Code from './code.json';
import styles from '../styles/Home.module.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // プラグイン登録




const proptitle = 'TK PORTFOLIO';


export default function Home() {
  const [open, setOpen] = useState(true)


  const [switchImg, setSwitchImg] = useState(0);
  const [switchGd, setSwitchGd] = useState(0);
  const setImgEvent = (e) => {
    // console.log(e.currentTarget.getAttribute('data'));
    const ImgNum = e.currentTarget.getAttribute('data')
    setSwitchImg(ImgNum)
    console.log(switchImg)

  }
  const setGdEvent = (e) => {
    // console.log(e.currentTarget.getAttribute('data'));
    const ImgNum = e.currentTarget.getAttribute('data')
    setSwitchGd(ImgNum)
    console.log(switchGd)
  }


  useEffect(() => {
    setOpen(!open)
  }, [switchImg]);


  const div = useRef();

  const gsapEl = useRef();
  const gsapEl2 = useRef();
  const gsapEl3 = useRef();
  const mainEl = useRef();

  useEffect(() => {
    setAnimation()

  }, [])

  useEffect(() => {
    setAnimation2()

  }, [gsapEl2])

  const setAnimation = () => {

    const custom_bird = gsap.timeline({
      toggleActions: 'play none reset reset', //デフォルトの指定
      scrollTrigger: {
        trigger: ".wrapper1", //アニメーションが始まるトリガーとなる要素
        start: "top center"
      }
    });

    custom_bird.fromTo(gsapEl.current,
      { opacity: 0, }, //fromの設定 //アニメーションする要素
      {
        keyframes: [
          { duration: 16.8, opacity: 1 }, //このアニメーションが終わったら下のアニメーションが起こる
          { duration: 1, opacity: 0 }
        ]
      },

    );



    const custom_anime = gsap.timeline({
      toggleActions: 'play none none play', //デフォルトの指定
      scrollTrigger: {
        trigger: ".wrapper4", //アニメーションが始まるトリガーとなる要素
        start: "top center"
      }
    });

    custom_anime.fromTo(gsapEl3.current,
      { opacity: 0, }, //fromの設定 //アニメーションする要素
      {
        keyframes: [
          { duration: 8.2, opacity: 1 }, //このアニメーションが終わったら下のアニメーションが起こる
          { duration: 1, opacity: 0 }
        ]
      },

    );

  }

  const setAnimation2 = () => {

    gsap.fromTo(gsapEl2.current,
      { opacity: 0, y: 140 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 1.6,
      });


    const custom_PC = gsap.timeline({
      toggleActions: 'play none none none', //デフォルトの指定
      scrollTrigger: {
        trigger: ".wrapper0", //アニメーションが始まるトリガーとなる要素
        start: "top center"
      }
    });

    custom_PC.to(gsapEl2.current,
      {
        keyframes: [
          { duration: 2.8, opacity: 0, y: 200 }, //このアニメーションが終わったら下のアニメーションが起こる
        ]
      }


    );
  };



  return (
    <div>
      <div ref={mainEl} className={styles.container}>
        <Head>
          <title>{proptitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>
          <div className={styles.imgwrap}>
            <img src="/SVG/fvmsg.svg" alt="" className={styles.fvmsgimg} />
            <Link href="/">
              <img src="/SVG/fvtitle.svg" alt="" className={styles.fvtimg} />
              {/* <h1 className={styles.FVTitle}>TOSHIYUKI<span></span>KIMURA<span></span>PORTFOLIO</h1> */}
            </Link>
            <div ref={gsapEl} style={{ position: 'fixed', zIndex: '2', width: '100%' }}><Birds /></div>
            <div ref={gsapEl2} style={{ position: 'fixed', zIndex: '1', width: '100%' }}><Boxes /></div>
            <div ref={gsapEl3} style={{ position: 'fixed', zIndex: '1', width: '100%' }}><Texts /></div>
            <Image src="/SVG/topimg.svg" className={styles.topimg} alt="TOP" layout='fill' objectFit='cover' />
          </div>

          <div className="wrapper0"></div>


          <section id='wd' className={styles.gdSection} style={{ backgroundSize: '800px' }}>
            <div style={{ height: '70px' }}></div>
            <div className="wrapper1">
              <h3 className={styles.wdTitle}>WEB WORKS<span>ウェブデザイン/開発</span></h3>
            </div>

            <div className={styles.grid} >
              <div className={styles.gridInner}>
                <figure className={styles.wdFigure}>
                  <div className={`${styles.wdImg} ${open ? styles.isImgOpen : styles.isImgClose}`}><img src={Code.wd[switchImg].image} alt="" width="100%" /></div>
                  <div className={styles.wdDescription}>
                    <span>{Code.wd[switchImg].year}</span>
                    <p>{Code.wd[switchImg].display}</p>
                    <p>{Code.wd[switchImg].descript}</p>
                  </div>
                </figure>
                <div className={styles.wdChildgrid}>
                  <p><span className={`${open ? styles.isOpen : styles.isClose}`}><img src={Code.wd[switchImg].bodyimage1} alt="" /></span></p>
                  <p><span className={`${open ? styles.isOpen : styles.isClose}`}><img src={Code.wd[switchImg].bodyimage2} alt="" /></span></p>
                  <p><span className={`${open ? styles.isOpen : styles.isClose}`}><img src={Code.wd[switchImg].bodyimage3} alt="" /></span></p>
                  <p><span className={`${open ? styles.isOpen : styles.isClose}`}><img src={Code.wd[switchImg].bodyimageSP1} alt="" /></span></p>
                  <p><span className={`${open ? styles.isOpen : styles.isClose}`}><img src={Code.wd[switchImg].bodyimageSP2} alt="" /></span></p></div>
              </div>
              <div className={styles.gridSide}>
                <ul>
                  {
                    Code.wd.map((el, i) =>
                      <Link href={el.path}><li onMouseEnter={setImgEvent} onTouchStart={setImgEvent} data={i} >{el.display}</li></Link>
                    )
                  }
                </ul>
              </div>
            </div>
          </section>

          <section id='gd' className={styles.gdSection}>
            <div style={{ height: '160px' }}></div>
            <div className="wrapper2">
              <h3 className={styles.wdTitle}>GRAPHIC WORKS<span>ロゴ/キャラクターetc</span></h3>
            </div>
            <div ref={div} className={styles.grGrid} >
              <div className={styles.grImg}><div className={styles.grImgInner}><img src={Code.gd[switchGd].image} alt="" className={styles.GRimg} /></div></div>
              <div className={styles.grDescript}>{Code.gd[switchGd].display}</div>
              <div className={styles.grSide}>
                <ul>
                  {
                    Code.gd.map((el, i) =>
                      <Link href={el.path}><li onMouseEnter={setGdEvent} onTouchStart={setGdEvent} data={i} >{el.display}<span style={{ display: 'inline-block' }}>{el.year}</span></li></Link>
                    )
                  }
                </ul>
              </div>
            </div>
          </section>

          <section id='prg' className={styles.prgSection}>
            <div style={{ height: '160px' }}></div>
            <div className="wrapper3">
              <h3 className={styles.wdTitle}>PROGRAMING<span>プログラミング</span></h3>
            </div>
            <div className={styles.prColm}>
              <div>
                <p>Dialogflow Chatbot</p>
                <p>GoogleSpreadSheet Api</p>
                <p>JsonServerAPI</p>
                <p>Dialogflow Chatbot</p>
                <p>GoogleSpreadSheet Api</p>
                <p>JsonServerAPI</p>
              </div>
            </div>
          </section>


          <section id='anl' className={styles.prgSection}>

            <div className="wrapper4">
              <h3 className={styles.wdTitle}>ANALOG<span>アナログ</span></h3>
            </div>
            <div className={styles.prColm}>
              <div>
                <p>TENUGUI1</p>
                <p>TENUGUI2</p>
                <p>TENUGUI3</p>
                <p>TENUGUI4</p>
                <p>TENUGUI5</p>
                <p>KIMONO-OBI1</p>
              </div>
            </div>
          </section>

          <div style={{ height: '820px' }}></div>

          <Profile />



          <div className={styles.footer} style={{ background: 'none' }}>
            <div className="main">

            </div>
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <span className={styles.logo}>
        </span>
      </footer>
    </div>

  )
}

