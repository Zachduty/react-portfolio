import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
     <div class="how-section1">
                    <div class="row">
                        <div class="col-md-6 how-img">
                            <img src="/images/chicago.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Chicago, IL</h4>
                                        <h4 class="subheading">Based out of Chicago, IL</h4>
                        <p class="text-muted">Currently working through Northwestern University's coding bootcamp. While the tons of information comes fast it can sometimes be challenging.
                        I've learned that I'm suited well under pressure while working towards my goals and ready to tackle any obstacles that may come my way.  </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Proficient in GitHub</h4>
                                        <h4 class="subheading">Excited and ready to work in a team environment</h4>
                                        <p class="text-muted">Working with classmates has helped me work very well in a team environment.
                                        Using GitHub has been a huge part of class and I've familiarized myself with it very well.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="/images/gitblue.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 how-img">
                             <img src="/images/js.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Languages</h4>
                                        <h4 class="subheading">Frontend? Back end? Full-Stack</h4>
                                        <p class="text-muted">From the basics like HTML5 and CSS to libraries like Bootstrap and Materialize.
                                        From JavaScript to nodeJS and jQuery. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get paid on time</h4>
                                        <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4>
                                        <p class="text-muted">All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="/images/react.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
  );
}

export default About;
