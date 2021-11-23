import React from 'react';
import Background from '../BackGrounds/Background';
import Card from './Card';
import CircleCard from './CircleCard';
import Me from './Me';
import style from './style.module.scss';

function index() {
  return (
    <section id="home" className={ style.home }>
      <Background />
      <Me />
      <Card />
      <CircleCard
        size={ 1 }
        svg={ (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
            <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#29b6f6" />
              <stop offset="1" stopColor="#13b2f6" />
            </linearGradient>
            <path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86 c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44 c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z" />
            <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse">
              <stop offset=".115" stopColor="#0076bb" />
              <stop offset=".257" stopColor="#0069b0" />
              <stop offset=".28" stopColor="#0069b0" />
              <stop offset=".424" stopColor="#0069b0" />
              <stop offset=".491" stopColor="#0072b7" />
              <stop offset=".577" stopColor="#0076bb" />
              <stop offset=".795" stopColor="#0076bb" />
              <stop offset="1" stopColor="#006eb9" />
            </linearGradient>
            <path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184 C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574 C7.304,34.37,8.271,34.43,9,33.896z" />
            <path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z" />
          </svg>
        ) }
        title="VsCode"
      />
      <CircleCard
        size={ 2 }
        svg={ (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="128px" height="128px">
            <path fill="#5dbc9d" d="M54.586,61H9.414c-0.891,0-1.337-1.077-0.707-1.707l5.121-5.121c0.75-0.75,1.768-1.172,2.828-1.172 h30.686c1.061,0,2.078,0.421,2.828,1.172l5.121,5.121C55.923,59.923,55.477,61,54.586,61z" />
            <path fill="#72caaf" d="M59,49H5c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h54c1.105,0,2,0.895,2,2v40 C61,48.105,60.105,49,59,49z" />
            <path fill="#c5e4fa" d="M9 11H55V43H9z" />
            <path fill="#72caaf" d="M38,57H26c-0.552,0-1-0.448-1-1v-7h14v7C39,56.552,38.552,57,38,57z" />
            <path fill="#5dbc9d" d="M25 49H39V53H25z" />
            <path fill="#e3f2ff" d="M37.929 43L56 24.929 56 11 53.857 11 21.857 43zM11.143 43L17.571 43 49.571 11 43.143 11zM38.86 11L10 39.86 10 34.5 33.5 11z" />
            <path fill="#8d6c9f" d="M59,4H5C3.346,4,2,5.346,2,7v40c0,1.654,1.346,3,3,3h19v2h-7.34c-1.34,0-2.59,0.52-3.54,1.46 L8,58.59c-0.57,0.57-0.74,1.43-0.43,2.18S8.6,62,9.41,62h45.18c0.81,0,1.53-0.48,1.84-1.23s0.14-1.61-0.43-2.18l-5.12-5.13 c-0.95-0.94-2.2-1.46-3.54-1.46H40v-2h19c1.654,0,3-1.346,3-3V7C62,5.346,60.654,4,59,4z M47.34,54c0.79,0,1.57,0.32,2.12,0.88 L54.59,60H9.41l5.13-5.12c0.55-0.56,1.33-0.88,2.12-0.88H24v2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-2H47.34z M38,52v2v2H26v-2v-2 v-2h12V52z M60,47c0,0.552-0.449,1-1,1H39H25H5c-0.551,0-1-0.448-1-1V7c0-0.552,0.449-1,1-1h54c0.551,0,1,0.448,1,1V47z" />
            <path fill="#8d6c9f" d="M55,10H9c-0.552,0-1,0.447-1,1v32c0,0.553,0.448,1,1,1h46c0.552,0,1-0.447,1-1V11 C56,10.447,55.552,10,55,10z M54,42H10V12h44V42z" />
            <path fill="#8d6c9f" d="M17 36c-.552 0-1 .447-1 1v2c0 .553.448 1 1 1s1-.447 1-1v-2C18 36.447 17.552 36 17 36zM12 40c.552 0 1-.447 1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2C11 39.553 11.448 40 12 40zM22 36c-.552 0-1 .447-1 1v2c0 .553.448 1 1 1s1-.447 1-1v-2C23 36.447 22.552 36 22 36zM27 40c.552 0 1-.447 1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2C26 39.553 26.448 40 27 40zM32 40c.552 0 1-.447 1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2C31 39.553 31.448 40 32 40zM42 36c-.552 0-1 .447-1 1v2c0 .553.448 1 1 1s1-.447 1-1v-2C43 36.447 42.552 36 42 36zM37 40c.552 0 1-.447 1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2C36 39.553 36.448 40 37 40zM47 36c-.552 0-1 .447-1 1v2c0 .553.448 1 1 1s1-.447 1-1v-2C48 36.447 47.552 36 47 36zM52 40c.552 0 1-.447 1-1v-2c0-.553-.448-1-1-1s-1 .447-1 1v2C51 39.553 51.448 40 52 40zM39.293 33.707C39.488 33.902 39.744 34 40 34s.512-.098.707-.293l8-8c.391-.391.391-1.023 0-1.414l-8-8c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414L46.586 25l-7.293 7.293C38.902 32.684 38.902 33.316 39.293 33.707zM23.293 33.707C23.488 33.902 23.744 34 24 34s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L17.414 25l7.293-7.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-8 8c-.391.391-.391 1.023 0 1.414L23.293 33.707z" />
            <path fill="#fff8f8" d="M26.502 18.996L27.74 21.26 30.004 22.498 27.74 23.736 26.502 26 25.264 23.736 23 22.498 25.264 21.26zM48.419 15.162L49.274 16.726 50.838 17.581 49.274 18.436 48.419 20 47.564 18.436 46 17.581 47.564 16.726zM34.648 32.704L35.231 33.769 36.296 34.352 35.231 34.935 34.648 36 34.065 34.935 33 34.352 34.065 33.769z" />
          </svg>
        ) }
        title="Desenvolvimento"
      />
      <CircleCard
        size={ 3 }
        svg={ (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
            <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z" />

          </svg>
        ) }
        title="Git"
      />
    </section>
  );
}

export default index;
