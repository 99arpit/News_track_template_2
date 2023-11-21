import "./Footer.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Footer = ({ page_name }) => {
  const agencyDetails = useSelector((state) => {
    return state.User;
  });
  const [ad, setAd] = useState();

  const fetchAd = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${agencyDetails._id}/${page_name}/Footer/get-Advertisement`
      );
      // console.log(response.data.data[0])
      setAd(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAd();
  }, [agencyDetails, page_name]);
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "black" }}>
        <div className="headingpara">
          <a href="/" className="heading">
            <h1 style={{paddingLeft:'2%'}}>{agencyDetails.publication_name}</h1>
          </a>
          <p className="para" style={{ marginBottom: "20px", color: "white",paddingLeft:'2%' }}>
            {agencyDetails.publisher_BIO}
          </p>
          <div style={{ display: "flex" ,paddingLeft:'2%'}}>
            <div>
              {" "}
              <a
                className="iconss"
                style={{ width: 38, height: 38, backgroundColor: "balck" }}
                href={`https://${agencyDetails.pub_social_twitter}`}
                target="_blank"
              >
                <i style={{color:'white'}}  className="fab fa-twitter" />
              </a>
            </div>

            <a
              className="iconss"
              style={{ width: 38, height: 38, backgroundColor: "black" }}
              href={`https://${agencyDetails.pub_social_facebook}`}
              target="_blank"
            >
              <i style={{color:'white'}} className="fab fa-facebook-f" />
            </a>
            <a
              className="iconss"
              style={{ width: 38, height: 38, backgroundColor: "balck" }}
              href={`https://${agencyDetails.pub_social_linkedin}`}
              target="_blank"
            >
              <i  style={{color:'white'}} className="fab fa-linkedin-in" />
            </a>
            <a
              className="iconss"
              style={{ width: 38, height: 38, backgroundColor: "balck" }}
              href={`https://${agencyDetails.pub_social_instagram}`}
              target="_blank"
            >
              <i style={{color:'white'}}  className="fab fa-instagram" />
            </a>
            <a
              className="iconss"
              style={{ width: 38, height: 38, backgroundColor: "balck" }}
              href={`https://${agencyDetails.pub_social_youtube}`}
              target="_blank"
            >
              <i style={{color:'white'}}  className="fab fa-youtube" />
            </a>
          </div>
        </div>

        <div className="quick">
          <h4 className="quickHeading" style={{ color: "white" }}>
            Quick Links
          </h4>
          <div className="ufm">
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right text-dark mr-2" />
              <a style={{ color: "white" }}>About</a>
            </a>

            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right text-dark mr-2" />
              <a style={{ color: "white" }}> Advertise</a>
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right text-dark mr-2" />
              <a style={{ color: "white" }}> Privacy &amp; policy</a>
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right text-dark mr-2" />
              <a style={{ color: "white" }}> Terms &amp; conditions</a>
            </a>
            <a className="text-secondary" href="#">
              <i className="fa fa-angle-right text-dark mr-2" />

              <a style={{ color: "white" }}>Contact</a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
