import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Contact() {
  //document.title = "contact";
  return (
    //     <router>
    // <route exact path="/contact">
    <div class="container">
      <div class="well well-sm quick-contact">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
                <h1 class="title-contact">Quick Contact</h1>
              </div>
              <div class="col-md-4 contact-email">
                <h2>info@website.com</h2>
                <h3>+12 34567890, +12 34567890</h3>
              </div>
              <div class="col-md-4">
                <div class="row contact row-first">
                  <div class="col-md-6">
                    <a href="http://www.jquery2dotnet.com" class="skype">
                      <i class="fa fa-skype"></i>skypeuser
                    </a>
                  </div>
                  <div class="col-md-6">
                    <a href="http://www.jquery2dotnet.com" class="google">
                      <i class="fa fa-google-plus"></i>googleplus
                    </a>
                  </div>
                </div>
                <div class="row contact">
                  <div class="col-md-6">
                    <a href="http://www.jquery2dotnet.com" class="linkedin">
                      <i class="fa fa-linkedin"></i>linkedin_id
                    </a>
                  </div>
                  <div class="col-md-6">
                    <a href="http://www.jquery2dotnet.com" class="twitter">
                      <i class="fa fa-twitter"></i>twitter_id
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </route>
    // </router>
  );
}

export default Contact;
