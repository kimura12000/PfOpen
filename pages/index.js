import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from "react"
import Header from './Header'
import Profile from './Profile'
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




  const [main, setMain] = useState()
  const ThreeDref = useRef()
  useEffect(() => {
    setMain(ThreeDref.current)
    console.log(ThreeDref.current.children[0])
  }, [main])




  const div = useRef();

  // const gsapEl = useRef();

  const gsapEl3 = useRef();

  useEffect(() => {
    setAnimation()

  }, [])


  const setAnimation = () => {


    const custom_anime = gsap.timeline({
      toggleActions: 'play none none play', //デフォルトの指定
      scrollTrigger: {
        trigger: ".wrapper5", //アニメーションが始まるトリガーとなる要素
        start: "top center"
      }
    });

    custom_anime.fromTo(gsapEl3.current,
      { opacity: 0, }, //fromの設定 //アニメーションする要素
      {
        keyframes: [
          { duration: 9.2, opacity: 1 }, //このアニメーションが終わったら下のアニメーションが起こる
          { duration: 1, opacity: 0 }
        ]
      },

    );

  }




  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>{proptitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main ref={ThreeDref}>
          <div className={styles.imgwrap}>
            <img src="/SVG/grd.svg" alt="" className={styles.fvgrdimg} />
            <img src="/SVG/fvmsg.svg" alt="" className={styles.fvmsgimg} />
            <Link href="/">
              <img src="/SVG/fvtitle.svg" alt="" className={styles.fvtimg} />
              {/* <h1 className={styles.FVTitle}>TOSHIYUKI<span></span>KIMURA<span></span>PORTFOLIO</h1> */}
            </Link>
            <div style={{ position: 'fixed', zIndex: '2', width: '100%', height: '100vh' }}></div>
            <div style={{ position: 'fixed', zIndex: '1', width: '100%' }}><Boxes mainRef={main}/></div>
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

          <div className="wrapper5" style={{ height: '1220px',position:'relative', zIndex:'10' }}>
            <p style={{height: '400px', display:'flex', justifyContent:'center', alignItems:'flex-end',lineHeight:'36px', letterSpacing:'0.1em', fontSize:'24px', fontWeight:'bold', marginBottom:'72px' }}>バウンダリ（境界）を超えてつくる</p>
            <p style={{height: '700px', display:'flex', justifyContent:'center', alignItems:'flex-start',lineHeight:'36px', letterSpacing:'0.1em' }}>デザインとコーディング　フロントエンドとバックエンド　クリエイティブとマーケティング　先端と古典<br/>
              会社と会社　業界と業界　人と人　都会と地方　デジタルとアナログ　老若男女　東西南北　価値観の違い<br/>
              複雑で多様な社会が存在し、そして、その間には様々な壁があります。<br/>
              あらゆるジャンル・あらゆるボーダーライン、専門性、領域、”それらを超えて届く何か”を</p>
          </div>

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

