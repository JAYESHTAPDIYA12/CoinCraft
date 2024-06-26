import React from 'react'
import img from './about.png'
import "./about.css"

const About = () => {
    return (
        <>
            <section id="about" className="aboutSec">
                <center>
                    <h2 className="heading1">About Us</h2>
                </center>
                <div className="about">

                    <div className="details">

                        <h3 className="heading">
                            {" "}
                            <i> We Are CoinCraft</i>
                        </h3>
                        <p className="para"> Welcome to CoinCraft, your premier destination for all things related to cryptocurrencies and blockchain technology. At CoinCraft, we're dedicated to providing you with accurate information, useful resources, and exceptional services to help you navigate the exciting world of digital currencies.</p>
                        <br />
                        {/* <p className="para"> At CoinCraft, the security of your assets and personal information is paramount. We employ industry-leading security measures, including encryption, multi-factor authentication, and cold storage solutions, to safeguard your funds and data against unauthorized access and cyber threats. Your privacy and security are our top priorities, and we continuously invest in advanced technologies and best practices to ensure the integrity of our platform. With CoinCraft, you can trade with confidence, knowing that your assets are protected by the highest standards of security and compliance.</p>
                        <br /> */}
                        <hr />
                    </div>

                    <div className="composition">
                        <img className="images" src={img} alt="about" />
                    </div>



                </div>


            </section>

        </>

    )
}

export default About
