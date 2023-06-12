import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>

            <h2 style={{paddingTop: '2em'}}>Silvia Raju Marihal</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> 
            Aspiring Software/Web/Full-stack Developer/Engineer with over 5 years of experience specializing in HTML, CSS, JavaScript/TypeScript, Java, and ReactJS. 
            Deep understanding of the Software Development Life Cycle (SDLC) and strong expertise in object-oriented programming. 
            Committed to delivering scalable web applications, I continuously explore emerging technologies to drive remarkable outcomes in fast-paced development environments.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>11353 Avenida De Los Lobos</h5>
            <p>San Diego, California 92127</p>
            <h5>Phone</h5>
            <p>(316) 213-8196</p>
            <h5>Email</h5>
            <p>silvia.rajumarihal@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear="AUGUST 2018"
              endYear="MAY 2020"
              schoolName="WICHITA STATE UNIVERSITY, Master's in Computer Science"
              schoolDescription="During my Master's program, I focused on the intricate art of designing and developing software systems by leveraging scientific analysis and mathematical models. My expertise lies in utilizing these tools to predict and measure outcomes, ensuring precise and impactful design consequences."
               />

               <Education
                 startYear="AUGUST 2013"
                 endYear="JULY 2017"
                 schoolName="SAMBHRAM INSTITUE OF TECHNOLOGY, Bachelor of Engineering in Information Science and Engineering"
                 schoolDescription="In the realm of academia, I immersed myself in the captivating study of the theoretical and practical foundations of information processing. Delving into the intricate realm of computations, I explored the profound art of solving practical problems and crafting innovative solutions that push the boundaries of what is possible."
                  />
                
                <hr style={{borderTop: '3px solid #ffffff'}} />

              <h2>Experience</h2>

            <Experience
              startYear="SEPTEMBER 2022"
              endYear="PRESENT"
              jobName="XIFIN, San Diego, California – Software Engineer"
              jobDescription="
              • Successfully collaborated with product owners, development team members, and key stakeholders to design, implement, and validate product requirements. 
              • Developed, reviewed, and tested code using Java, Spring Boot, Spring Security, and Spring Web Services. 
              • Built responsive Single Page Web Applications using modern front-end technologies like jQuery, React, HTML5, CSS3, and Bootstrap. 
              • Utilized OpenShift and Kubernetes platforms to support customer requirements as a Customer Success Manager (CSM), ensuring seamless deployment, scaling, and management of applications in a cloud-native environment. 
              • Leveraged client statement engines at XIFIN to streamline and optimize billing processes, resulting in improved accuracy and efficiency in client statement generation and delivery. 
              • Proficient in utilizing Selenium WebDriver for automated web testing, ensuring the quality and reliability of web applications."
              />

             <Experience
              startYear="APRIL 2021"
              endYear="SEPTEMBER 2022"
              jobName="RingCentral, Belmont, California – Associate Software Engineer"
              jobDescription="
              • Designed and developed software features that work with enterprise customers in a virtual desktop environment using RingCentral communications software, responsible for upgrading web Adapter-desktop to TypeScript, and upgrading web Adapter virtual desktop infrastructure SDK based on sip.js 0.20.0
              •	Developed and integrated the WebSocket systems like web Adapters to implement web phone integrations for Linux and Virtual Desktop Environments; designed and developed an enhanced logging system for web Adapter to resolve JavaScript errors
              •	Developed Chromium Embedded Framework (CEF) focusing on facilitating embedded browser use cases in third party applications using Visual Studio Code C++              
              "
              />
              
              <Experience
                startYear="JANUARY 2021"
                endYear="MARCH 2021"
                jobName="RingCentral, Fort Lauderdale, Florida –  Front-End "
                jobDescription="
                •	Added an improvement feature “Add note to note results page” to the RingCentral application using React, Typescript and MobX
                •	Implemented tech solution, unit test cases, e2e test cases and tested it using TestCafe
                •	Contributed to technical debt evaluation and problem solving
                •	Working knowledge of HTML/CSS
                •	Develop automated tests
                •	Evaluating product performance
                "
                />
              
              <Experience
                startYear="JUNE 2020"
                endYear="DECEMBER 2020"
                jobName="BrightField, New York –  Full Stack Developer"
                jobDescription="
                •	Developed the frontend architecture using React, TypeScript, and Redux for Talent Data Exchange, enhancing user experience and overall performance and built a robust system utilizing technologies such as gulp, PostCSS, and webpack, optimizing the development workflow and ensuring efficient resource management.
                •	Utilized Maven for streamlined dependency management, enabling seamless build processes and deploying applications to containers, application servers, and version repositories.
                •	Demonstrated proficiency in Unix shell scripting and command line utilities, automating system administration tasks and enhancing operational efficiency.
                "
                />

                <Experience
                startYear="JANUARY 2019"
                endYear="APRIL 2020"
                jobName="Capital One, Virginia - Full Stack Developer Intern"
                jobDescription="
                •	Implemented Application using Agile methodology where there is a daily SCRUM meeting to understand the status and resolve any issues. 
                •	Worked on JUnit for unit testing of the application and log4j for logging.
                •	Developed Typescript reusable components and services to consume REST API's using component-based architecture.
                "
                />
              
              <Experience
                startYear="JULY 2017"
                endYear="AUGUST 2018"
                jobName="Hexaware Solutions, Hyderabad India - Software Engineer"
                jobDescription="
                •	Oversaw application state management, ensuring seamless updates to the store and subscribed components.
                •	Created reusable TypeScript components and services, utilizing a component-based architecture to consume REST APIs efficiently
                •	Conducted unit testing using Power Mockito to ensure the robustness and reliability of the codebase
                "
                />

               <hr style={{borderTop: '3px solid #ffffff'}} />

              <h2>Skills</h2>
              <Skills
                skill="JAVA/J2EE TECHNOLOGIES: Servlets, JSP, JDBC, Hibernate, JPA."
                progress={90}
                />
              <Skills
                skill="PROGRAMMING LANGUAGES: Java, C++, C, SQL, JavaScript, TypeScript."
                progress={90}
                />
              <Skills
                skill="WEB TECHNOLOGIES: HTML5, CSS3, JavaScript, TypeScript, Ajax, jQuery,9/11, ReactJS, Node.JS, Vue.JS, JSON, Bootstrap, Apache, XML, JSON, Web pack, Babel, WebRTC, WebLogic , webservices."
                progress={75}
              />
              <Skills
                skill="SPRING TOOLS: Spring MVC, IOC, AOP, JDBC, Spring Boot, Spring Microservices, Spring REST, Spring Cloud and Feign Client."
                progress={70}
              />
              <Skills
                skill="DATABASE : Oracle SQL Server, MySQL, PostgreSQL."
                progress={80}
              />
              <Skills
                skill="VERSION CONTROL: Git, Bitbucket, Gitlab."
                progress={100}
              />
              <Skills
                skill="DEVOPS TOOLS: Maven, Gradle, Docker, Kubernetes, OpenShift, Jenkins."
                progress={75}
              />
              <Skills
                skill="TESTING TECHNOLOGIES/TOOLS: JUnit, Mockito, Postman."
                progress={75}
              />

              <Skills
                skill="CLOUD TECHNOLOGIES: AWS, AWS Lambda"
                progress={70}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
