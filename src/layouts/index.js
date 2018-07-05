import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome';
import Typing from 'react-typing-animation';
import 'font-awesome/css/font-awesome.css';

import './index.css'
import SidebarButton from '../components/SidebarButton';
import PortfolioBlock from '../components/PortfolioBlock';

const Sidebar = () => (
  <div id="sidebar">
    <SidebarButton name="About" element={".about"}/>
    <SidebarButton name="Portfolio" element=".portfolio"/>
    <SidebarButton name="Skills" element={".skills"}/>
    <SidebarButton name="Contact" element=".contact"/>
    <SidebarButton name="Blog" onClick={() => window.open('http://azbo400.github.io/Blog')}/>
    <div className="sidebar-profile"> 
      <img></img>
      <h3 className="text">Ryan A</h3>
      <p className="textSmall">Student/Aspiring Developer</p>
      <div className="social-icons">
        <a href="https://twitter.com/azbo400" target="_blank"><FontAwesome name="twitter"/></a>
        <a href="https://www.youtube.com/channel/UCEgc6SMmlV-H6_qCPwh_m_Q" target="_blank"><FontAwesome name="youtube" /></a>
        <a href="https://github.com/Azbo400" target="_blank"><FontAwesome name="github" /></a>
        <a href="https://freecodecamp.com/azbo400" target="_blank"><FontAwesome name="free-code-camp" /></a>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div id="home" className="rightbar">
    <div className="ryana">
      <h1 className="header">Ryan A</h1> 
      <Typing className="typing">
        <span>14 year old passionate about Web development, JavaScript, React, and Node JS</span>
        <Typing.Delay ms={1500} />
        <Typing.Speed ms={50} />
        <Typing.Backspace count={47} />
        <span>programming.</span>
      </Typing>
      <div className="social-icons-home">
        <a href="https://twitter.com/azbo400" target="_blank"><FontAwesome name="twitter"/></a>
        <a href="https://www.youtube.com/channel/UCEgc6SMmlV-H6_qCPwh_m_Q" target="_blank"><FontAwesome name="youtube" /></a>
        <a href="https://github.com/Azbo400" target="_blank"><FontAwesome name="github" /></a>
        <a href="https://freecodecamp.com/azbo400" target="_blank"><FontAwesome name="free-code-camp" /></a>
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="rightbar about">
    <h1 className="headertext">About</h1>
    <p className="abouttext">Hello there, my name is Ryan and I am a 14 year old boy who loves programming. In specific, I enjoy web development and JavaScript. For the past few years I have been fascinated with programming and technology. Along with web development I also enjoy working with other technologies such as mobile app development with React Native. I love building things and publishing those apps to the world. While I am not programming, I am probably at school, or doing homework</p>
  </div>
);

const Portfolio = () => (
  <div className="rightbar portfolio"> 
    <div>
      <h1 className="portfolioheader">Portfolio</h1>
      <div className="portfolioblocks">
        <PortfolioBlock name="Aware (Coming Soon)" info={<p className="portfolioinfo">Aware is a mobile application I am currently developing using React Native. More information will come out soon as I near the completion of the project.</p>} className="firstportfolio"/>
        <PortfolioBlock name="This Website" info={<p className="portfolioinfo">I developed this Website using React and Gatsby, a static site generator for React. You can check out the source code out <a href="https://github.com/Azbo400/Azbo400.github.io" target="_blank">here</a> on Github </p>} source={require('../../public/img/mywebsite.png')}/>
        <PortfolioBlock name="FCC Projects" info={<p className="portfolioinfo">I have completed many of the freeCodeCamp projects. You can check out all my front-end projects on my  <a target="_blank" href="https://codepen.io/azbo400/">Codepen</a> and you can check out some of my backend projects on my <a target="_blank" href="https://github.com/Azbo400">Github</a></p>} source={require('../../public/img/codepen.png')}/>
        <PortfolioBlock name="React Redux Authentication Boilerplate" info={<p className="portfolioinfo"> React Redux Authentication boilerplate that using Node.js on the backend to let users create accounts, login, logout, etc. <a target="_blank" href="https://github.com/Azbo400/react-redux-authentication-boilerplate">Github Link</a> </p>} source={require('../../public/img/react-redux-authentication.png')}/>
      </div>
      <p className="portfolionote">**check out my Github for more projects** </p>
    </div>
  </div>
);

const Skills = () => (
  <div className="rightbar skills"> 
    <p>Some of my skills include:</p>
    <ul>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>Node JS</li>
      <li>Python</li>
      <li>WordPress</li>
    </ul>
    <p className="librariesandframeworks">In addition, I also know quite a few frameworks and libraries such as, gulp, react-router, redux, and much more. Every day I am getting better and learning new things. 
    </p>
  </div>
);

class Contact extends React.Component {
  componentDidMount() { 
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "yuzs9nlsfv7zmtxp1byo8i60"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
        var message = document.querySelector("#" + form_id_js + " [name='text']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
  }

  render() {
    return (
      <div className="rightbar contact">
        <div className="email">
          <form id="javascript_form">
            <h1 style={{textAlign: 'center'}}>Contact</h1>
            <input type="text" name="subject" placeholder="Subject" /> <br />
            <textarea name="text" placeholder="Message" className="message"></textarea>
            <input type="submit" id="js_send" value="Send" className="submitbutton"/>
          </form>
        </div>
      </div>
    );
  }
} 

const Footer = () => (
  <div className="rightbar footer">
    <p>Developed by Ryan A 2017/2018</p>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ryan A"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar />
    <Home />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
