import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
There’s nothing cookie-cutter about Maestro Pizzini. Not our pizzas. Not our people. 
And definitely not the way we live life. Around here, we don’t settle for anything less than food
 we’re proud to serve. And we don’t just clock in. Not when we can also 
become our best, make friends, and have fun while we’re at it. We’re the pizza company that lives life unboxed.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;