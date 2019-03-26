import React from 'react';
import './PhoneBezel.scss';

const PhoneBezel = ({ children }) => (
  <div className="phone-bezel">
    <div className="phone-bezel__content">{children}</div>
    <div className="phone-bezel__shadow" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 235.3 469.8"
      fill="none"
    >
      <path
        fill="url(#a)"
        d="M1.9 82c.6-.2.6-1.2.6-1.5v-16c0-.6 0-1.1-.6-1.5z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#b)"
        d="M1.9 132.1c1-.6.9-1.7.9-2V98c0-.6-.1-1.8-.9-2.5V132z"
        transform="translate(-.3)"
      />
      <path
        fill="#000004"
        d="M36.3 0A34.8 34.8 0 0 0 1.6 35v399.7a34.8 34.8 0 0 0 34.8 34.9H199c19.3 0 35-15.7 34.8-35V35c0-19.3-15.7-35-35-34.8zm162.9 14c11.3 0 20.4 9.3 20.4 20.5V435c0 11.3-9.1 20.4-20.4 20.4h-163A20.4 20.4 0 0 1 15.8 435V34.5c0-11.3 9.2-20.3 20.5-20.2z"
      />
      <path
        fill="url(#c)"
        d="M1.9 175c1-.6.9-1.7.9-2v-32c0-.6-.1-1.8-.9-2.5z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#d)"
        d="M212 6.8c1.7.7 3.2 1.6 4.7 2.6 4.7 1.7 8.5 4.5 11.6 8.6-2.2-3.7-5-6.9-8.4-9.5a11 11 0 0 0-6.2-1.8H212"
        transform="translate(-.3)"
      />
      <path
        fill="url(#e)"
        d="M230.5 35.6V235h2.7V35.6c0-6.4-1.8-12.4-4.9-17.6a24.8 24.8 0 0 0-11.6-8.6 31.7 31.7 0 0 1 13.8 26.2z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#f)"
        d="M16.4 8.5A34.7 34.7 0 0 0 8 18c3.1-4.1 6.9-6.9 11.6-8.6 1.5-1 3-1.9 4.7-2.6l-1.7-.1a11 11 0 0 0-6.2 1.8"
        transform="translate(-.3)"
      />
      <path
        fill="url(#g)"
        d="M8 18c-3 5.2-5 11.2-5 17.6v198.9h2.7v-199c0-10.8 5.5-20.3 13.8-26A24.8 24.8 0 0 0 8 18"
        transform="translate(-.3)"
      />
      <path
        fill="url(#h)"
        d="M118.2 1.2H37.6a34 34 0 0 0-21.2 7.3c2.5-1.6 4.7-2 7.9-1.7 4-2 8.5-3 13.3-3h161.1c4.8 0 9.3 1 13.3 3 3.2-.3 5.4.1 8 1.7a34.2 34.2 0 0 0-21.3-7.3z"
        transform="translate(-.3)"
      />
      <path
        fill="#000"
        d="M232.7 161.4v-51.9c0-.6 0-1.8 1.1-2.5v56.5c-1.3-.6-1.2-1.7-1.2-2z"
      />
      <path
        fill="url(#i)"
        d="M216.7 460.7c-1.5 1-3 1.9-4.7 2.6 3.2.3 5.4-.1 8-1.7 3.3-2.6 6.1-5.8 8.3-9.5a24.8 24.8 0 0 1-11.6 8.6"
        transform="translate(-.3)"
      />
      <path
        fill="url(#j)"
        d="M230.5 434.5c0 10.9-5.5 20.4-13.8 26.2 4.7-1.7 8.5-4.5 11.6-8.6 3-5.2 4.9-11.2 4.9-17.6V235h-2.7z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#k)"
        d="M16.4 461.6c2.5 1.6 4.7 2 7.9 1.7-1.7-.7-3.2-1.6-4.7-2.6A24.8 24.8 0 0 1 8 452c2.2 3.7 5 6.9 8.4 9.5"
        transform="translate(-.3)"
      />
      <path
        fill="url(#l)"
        d="M3.1 235.6v199c0 6.3 1.8 12.3 4.9 17.5 3.1 4.1 6.9 6.9 11.6 8.6a31.7 31.7 0 0 1-13.8-26.2V235.6z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#m)"
        d="M212 463.3c-4 2-8.5 3-13.3 3H37.6c-4.8 0-9.3-1-13.3-3-3.2.3-5.4-.1-7.9-1.7a34.2 34.2 0 0 0 21.2 7.3h161.1a34 34 0 0 0 21.2-7.3c-2.5 1.6-4.7 2-7.9 1.7"
        transform="translate(-.3)"
      />
      <path
        fill="url(#n)"
        d="M37.2 4.5c-17 0-30.8 13.7-30.8 30.7v399.1a31 31 0 0 0 31 31h162a30.5 30.5 0 0 0 30.5-30.5V35.5a31 31 0 0 0-31-31zM7.5 434.3V35A29.5 29.5 0 0 1 37 5.5h161.9a30 30 0 0 1 30 30v399.3a29.5 29.5 0 0 1-29.5 29.4h-162a30 30 0 0 1-30-29.9"
        transform="translate(-.3)"
      />
      <path
        fill="url(#o)"
        d="M224 38v393.7c0 20-10.4 24.2-12.9 29.2 9-3.8 17.1-12.3 17.1-29.4l.3-196.7-.3-196.7c0-17.1-8-25.6-17-29.4 2.4 5 12.9 9.2 12.9 29.2z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#p)"
        d="M8.7 38l-.3 196.8.3 196.7c0 17 8 25.6 17 29.4-2.3-5-12.8-9.2-12.8-29.2V37.9c0-20 10.5-24.3 12.9-29.2-9 3.8-17.1 12.3-17.1 29.4"
        transform="translate(-.3)"
      />
      <path
        fill="url(#q)"
        d="M197.8 6.3h-160a31 31 0 0 0-13.9 3.3l1 2.1c3.6-1.4 8.4-2.4 13-2.4h160c4.4 0 8.8 1 12.6 2.8l1.2-2.7a33 33 0 0 0-13.9-3.1z"
        opacity=".4"
        transform="translate(-.3)"
      />
      <path
        fill="url(#r)"
        d="M197.8 463h-160a31 31 0 0 1-13.9-3.3l1-2c3.6 1.3 8.4 2.3 13 2.3h160c4.4 0 8.8-1 12.6-2.7l1.2 2.6a33 33 0 0 1-13.9 3.1z"
        opacity=".4"
        transform="translate(-.3)"
      />
      <path
        fill="url(#u)"
        d="M230.4 48.3h3.7v-2.9h-3.7zm0 376h3.7v-2.9h-3.7z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#v)"
        d="M1.9 48.3h3.7v-2.9H2v2.9zm0 376h3.7v-2.9H2v2.9z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#w)"
        d="M235 113.6V160c0 1 0 2 .4 2 .2 0 .2-.6.2-1.2v-50c0-.7 0-1.7-.2-1.9-.5.5-.5 2-.5 4.7"
        transform="translate(-.3)"
      />
      <path
        fill="url(#x)"
        d="M233.4 112.2v46.6c0 2.2.1 3.5.5 3.8l1.5-.5c-.5-.1-.5-1.2-.5-2v-46.5c0-2.8 0-4.2.5-4.7l-1.4-.8c-.6 1-.6 3.2-.6 4"
        transform="translate(-.3)"
      />
      <path
        fill="url(#y)"
        d="M.4 99.3v30.2c0 .6 0 1.1.2 1.3.5-.2.4-1.2.4-2V102c0-2.7 0-4.2-.4-4.6-.2.1-.2 1.1-.2 1.8z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#z)"
        d="M.6 97.5c.4.4.4 1.9.4 4.6v26.6c0 1 0 2-.4 2l1.4.6c.5-.3.6-1.7.6-3.8v-26.8c0-.8 0-3-.7-4.1z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#A)"
        d="M.4 142.2v30.2c0 .6 0 1 .2 1.2.5-.1.4-1.1.4-2V145c0-2.7 0-4.2-.4-4.7-.2.2-.2 1.2-.2 2z"
        transform="translate(-.3)"
      />
      <path
        fill="url(#B)"
        d="M.6 140.3c.4.5.4 2 .4 4.7v26.6c0 .9 0 1.9-.4 2l1.4.6c.5-.3.6-1.7.6-3.8v-26.8c0-.9 0-3-.7-4.1z"
        transform="translate(-.3)"
      />
      <path fill="#555658" d="M0 64v16.8l.4.5V63.6z" />
      <path
        fill="url(#C)"
        d="M.7 63.6v17.7H2c.2-.2.2-.5.2-1V64.6c0-.6 0-.9-.3-1H.7z"
        transform="translate(-.3)"
      />
      <path
        fill="#000"
        d="M125 468.4h-17.5c-1.2 0-2.7 0-5 1.4h27.6a9.5 9.5 0 0 0-5-1.4z"
      />
      <path
        fill="url(#D)"
        d="M117.1 468.7h-8.8a10 10 0 0 0-4.7 1h26a10 10 0 0 0-4.8-1H117z"
        transform="translate(-.3)"
      />
      <defs id="defs344">
        <linearGradient
          id="a"
          x1="1.9"
          x2="2.5"
          y1="72.5"
          y2="72.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop72" stop-color="#666" />
          <stop id="stop74" offset=".5" stop-color="#1F1F1F" />
          <stop id="stop76" offset="1" stop-color="#1F1F1F" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="1.9"
          x2="2.8"
          y1="113.9"
          y2="113.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop79" stop-color="#fff" />
          <stop id="stop81" offset=".5" />
          <stop id="stop83" offset="1" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="1.9"
          x2="2.8"
          y1="156.8"
          y2="156.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop86" stop-color="#fff" />
          <stop id="stop88" offset=".5" />
          <stop id="stop90" offset="1" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="212.9"
          x2="230.2"
          y1="5.7"
          y2="17.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop93" stop-color="#4D4D4D" />
          <stop id="stop95" offset="1" stop-color="#1A1A1A" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="216.7"
          x2="233.2"
          y1="122.3"
          y2="122.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop98" stop-color="#7C7D7D" />
          <stop id="stop100" offset=".4" stop-color="#7C7D7D" />
          <stop id="stop102" offset=".7" stop-color="#F5F9FF" />
          <stop id="stop104" offset=".9" stop-color="#F5F9FF" />
          <stop id="stop106" offset="1" stop-color="#737375" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="6.5"
          x2="24.1"
          y1="17"
          y2="5.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop109" stop-color="#4D4D4D" />
          <stop id="stop111" offset="1" stop-color="#1A1A1A" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="19.7"
          x2="3.1"
          y1="121.9"
          y2="121.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop114" stop-color="#7C7D7D" />
          <stop id="stop116" offset=".4" stop-color="#7C7D7D" />
          <stop id="stop118" offset=".7" stop-color="#F5F9FF" />
          <stop id="stop120" offset=".9" stop-color="#F5F9FF" />
          <stop id="stop122" offset="1" stop-color="#737375" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="118.2"
          x2="118.2"
          y1="8.6"
          y2="1.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop125" stop-color="#BFC1C7" />
          <stop id="stop127" offset=".7" stop-color="#BFC1C7" />
          <stop id="stop129" offset="1" stop-color="#FBFCFF" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="212.9"
          x2="230.2"
          y1="464.4"
          y2="452.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop132" stop-color="#4D4D4D" />
          <stop id="stop134" offset="1" stop-color="#1A1A1A" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="216.8"
          x2="233.1"
          y1="347.8"
          y2="347.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop137" stop-color="#7C7D7D" />
          <stop id="stop139" offset=".4" stop-color="#7C7D7D" />
          <stop id="stop141" offset=".7" stop-color="#F5F9FF" />
          <stop id="stop143" offset=".9" stop-color="#F5F9FF" />
          <stop id="stop145" offset="1" stop-color="#737375" />
        </linearGradient>
        <linearGradient
          id="k"
          x1="23.6"
          x2="7.2"
          y1="464.5"
          y2="453.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop148" stop-color="#4D4D4D" />
          <stop id="stop150" offset="1" stop-color="#1A1A1A" />
        </linearGradient>
        <linearGradient
          id="l"
          x1="19.5"
          x2="3"
          y1="348.2"
          y2="348.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop153" stop-color="#7C7D7D" />
          <stop id="stop155" offset=".4" stop-color="#7C7D7D" />
          <stop id="stop157" offset=".7" stop-color="#F5F9FF" />
          <stop id="stop159" offset=".9" stop-color="#F5F9FF" />
          <stop id="stop161" offset="1" stop-color="#737375" />
        </linearGradient>
        <linearGradient
          id="m"
          x1="118.2"
          x2="118.2"
          y1="461.4"
          y2="469"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop164" stop-color="#BFC1C7" />
          <stop id="stop166" offset=".7" stop-color="#BFC1C7" />
          <stop id="stop168" offset="1" stop-color="#FBFCFF" />
        </linearGradient>
        <linearGradient
          id="n"
          x1="6.4"
          x2="229.9"
          y1="234.9"
          y2="234.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop171" stop-color="#2E2E2E" />
          <stop id="stop173" offset=".1" />
          <stop id="stop175" offset=".2" stop-color="#363636" />
          <stop id="stop177" offset=".8" stop-color="#363636" />
          <stop id="stop179" offset=".9" />
          <stop id="stop181" offset="1" stop-color="#2E2E2E" />
        </linearGradient>
        <linearGradient
          id="o"
          x1="211.1"
          x2="228.5"
          y1="234.8"
          y2="234.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop184" stop-color="#6B6C70" />
          <stop id="stop186" offset=".8" stop-color="#6B6C70" />
          <stop id="stop188" offset="1" stop-color="#CECFD1" />
        </linearGradient>
        <linearGradient
          id="p"
          x1="25.8"
          x2="8.4"
          y1="234.8"
          y2="234.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop191" stop-color="#6B6C70" />
          <stop id="stop193" offset=".8" stop-color="#6B6C70" />
          <stop id="stop195" offset="1" stop-color="#CECFD1" />
        </linearGradient>
        <linearGradient
          id="q"
          x1="23.9"
          x2="211.7"
          y1="9.2"
          y2="9.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop198" />
          <stop id="stop200" offset=".1" stop-color="#fff" />
          <stop id="stop202" offset=".2" stop-color="#fff" />
          <stop id="stop204" offset=".6" stop-color="#fff" />
          <stop id="stop206" offset=".8" stop-color="#fff" />
          <stop id="stop208" offset=".9" stop-color="#fff" />
          <stop id="stop210" offset="1" />
        </linearGradient>
        <linearGradient
          id="r"
          x1="23.9"
          x2="211.7"
          y1="460.1"
          y2="460.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop213" />
          <stop id="stop215" offset=".1" stop-color="#fff" />
          <stop id="stop217" offset=".2" stop-color="#fff" />
          <stop id="stop219" offset=".6" stop-color="#fff" />
          <stop id="stop221" offset=".8" stop-color="#fff" />
          <stop id="stop223" offset=".9" stop-color="#fff" />
          <stop id="stop225" offset="1" />
        </linearGradient>
        <radialGradient
          id="s"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(142.8 18.7) scale(2.07337)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop228" />
          <stop id="stop230" offset=".6" />
          <stop id="stop232" offset=".8" />
          <stop id="stop234" offset="1" stop-color="#00F" />
        </radialGradient>
        <linearGradient
          id="t"
          x1="141.4"
          x2="143.2"
          y1="17.7"
          y2="19.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop237" stop-color="#5482FF" />
          <stop id="stop239" offset=".3" />
          <stop id="stop241" offset=".6" />
          <stop id="stop243" offset="1" />
        </linearGradient>
        <linearGradient
          id="u"
          x1="230.4"
          x2="234.1"
          y1="234.9"
          y2="234.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop246" stop-color="gray" />
          <stop id="stop248" offset=".5" stop-color="#CCC" />
          <stop id="stop250" offset="1" stop-color="#CCC" />
        </linearGradient>
        <linearGradient
          id="v"
          x1="5.6"
          x2="1.9"
          y1="234.9"
          y2="234.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop253" stop-color="gray" />
          <stop id="stop255" offset=".5" stop-color="#CCC" />
          <stop id="stop257" offset="1" stop-color="#CCC" />
        </linearGradient>
        <linearGradient
          id="w"
          x1="234.9"
          x2="235.6"
          y1="135.5"
          y2="135.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop260" stop-color="#4A4A4A" />
          <stop id="stop262" offset=".5" stop-color="#4A4A4A" />
          <stop id="stop264" offset="1" stop-color="#E6E6E6" />
        </linearGradient>
        <linearGradient
          id="x"
          x1="234.4"
          x2="234.4"
          y1="107.9"
          y2="162.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop267" />
          <stop id="stop269" offset="0" />
          <stop id="stop271" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop273" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop275" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop277" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop279" offset="1" />
          <stop id="stop281" offset="1" />
        </linearGradient>
        <linearGradient
          id="y"
          x1="1"
          x2=".4"
          y1="114.1"
          y2="114.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop284" stop-color="#4A4A4A" />
          <stop id="stop286" offset=".5" stop-color="#4A4A4A" />
          <stop id="stop288" offset="1" stop-color="#E6E6E6" />
        </linearGradient>
        <linearGradient
          id="z"
          x1="1.6"
          x2="1.6"
          y1="96.5"
          y2="131.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop291" stop-color="#121212" />
          <stop id="stop293" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop295" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop297" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop299" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop301" offset="1" stop-color="#242424" />
        </linearGradient>
        <linearGradient
          id="A"
          x1="1"
          x2=".4"
          y1="157"
          y2="157"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop304" stop-color="#4A4A4A" />
          <stop id="stop306" offset=".5" stop-color="#4A4A4A" />
          <stop id="stop308" offset="1" stop-color="#E6E6E6" />
        </linearGradient>
        <linearGradient
          id="B"
          x1="1.6"
          x2="1.6"
          y1="139.4"
          y2="174.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop311" stop-color="#121212" />
          <stop id="stop313" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop315" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop317" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop319" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop321" offset="1" stop-color="#242424" />
        </linearGradient>
        <linearGradient
          id="C"
          x1="1.5"
          x2="1.5"
          y1="63.6"
          y2="81.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop324" stop-color="#121212" />
          <stop id="stop326" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop328" offset=".1" stop-color="#F0F0F0" />
          <stop id="stop330" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop332" offset=".9" stop-color="#F0F0F0" />
          <stop id="stop334" offset="1" stop-color="#242424" />
        </linearGradient>
        <linearGradient
          id="D"
          x1="116.6"
          x2="116.6"
          y1="468.7"
          y2="469.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop337" stop-color="#616369" />
          <stop id="stop339" offset=".5" stop-color="#151617" />
          <stop id="stop341" offset="1" stop-color="#151617" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default PhoneBezel;
