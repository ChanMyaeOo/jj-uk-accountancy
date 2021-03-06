import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
import useStyles from "./styles";
import AboutImg from "../../images/home-about-img.jpg";

const HomeAbout = () => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            duration: 800
        })
    }, [])
    return (
        <div className={classes.about}>
            <div className={classes.aboutLeft}>
                <p className={classes.page}>About Us</p>
                <h2 className={classes.title}>We are here to manage your finance with <em>experience</em></h2>
        
                <p className={classes.content}>
                    The perfection in work and the peace of mind we deliver are
                    another key point of JJ UK Consulting. We are English and
                    Russian Accountant in London to serve you according to your
                    needs and flexibility. This personalises approach has set us
                    apart from others in the same industry.
                </p>
                <br />
                <p className={classes.content}>
                    From the beginning, this has been our motto and the secret
                    for success. We keep our self and our clients organised and
                    up to date in order to deliver transparency of work and
                    satisfaction.
                </p>
                <br />

                <div className={classes.contentWrap}>
                <div className={classes.topContent}>
                    <div >-&gt; The best service</div>
                    <div>-&gt; Competitive and fair pricing</div>
                </div>

                <div className={classes.bottomContent}>
                    <div>-&gt; Peace of mind</div>
                    <div>-&gt; Easy availability</div>
                </div>
                </div>

                <div>
                    <p>
                        Call to ask <Link to="/contact" className={classes.askQus}>any question&nbsp;</Link> &nbsp;<strong className={classes.phTxt}>+44 20 3830 8882</strong>
                    </p>
                </div>
            </div>

            <div className={classes.aboutRight}>
                
                    <img src={AboutImg} alt="about img" className={classes.aboutImg} data-aos="fade-up" data-aos-once="true"/>
                
                <div className={classes.status}>
                    <div>
                        <div className={classes.statusNumber}><CountUp end={90} /> +</div>
                        <div className={classes.statusName}>Trusted Clients</div>
                    </div>

                     <div>
                        <div className={classes.statusNumber}><CountUp end={98} /> %</div>
                        <div className={classes.statusName}>Happy Clients</div>
                    </div>

                     <div>
                        <div className={classes.statusNumber}><CountUp end={100} /> %</div>
                        <div className={classes.statusName}>Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
