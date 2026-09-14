import 'package:heroicons_animated/src/icons/icon_base.dart';

const rocketLaunch = HeroiconAnimatedIconData(
  name: 'rocket-launch',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, 0.0, -3.0, 2.0, -2.0, 1.0, -1.0, 0.0],
    keyframesY: [0.0, -3.0, 0.0, -2.0, -3.0, -1.0, -2.0, 0.0],
    duration: Duration(milliseconds: 6000),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M15.5904 14.3696C15.6948 14.8128 15.75 15.275 15.75 15.75C15.75 19.0637 13.0637 21.75 9.75 21.75V16.9503M15.5904 14.3696C19.3244 11.6411 21.75 7.22874 21.75 2.25C16.7715 2.25021 12.3595 4.67586 9.63122 8.40975M15.5904 14.3696C13.8819 15.6181 11.8994 16.514 9.75 16.9503M9.63122 8.40975C9.18777 8.30528 8.72534 8.25 8.25 8.25C4.93629 8.25 2.25 10.9363 2.25 14.25H7.05072M9.63122 8.40975C8.38285 10.1183 7.48701 12.1007 7.05072 14.25M9.75 16.9503C9.64659 16.9713 9.54279 16.9912 9.43862 17.0101C8.53171 16.291 7.70991 15.4692 6.99079 14.5623C7.00969 14.4578 7.02967 14.3537 7.05072 14.25M16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9Z',
    ),
    PathElement(
      d: 'M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 2000),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M4.81191 16.6408C3.21213 17.9612 2.5 19.2724 2.5 20.75C2.5 20.9869 2.5183 21.2195 2.55356 21.4464C2.78054 21.4817 3.01313 21.5 3.25 21.5C4.72758 21.5 6.03883 20.7879 6.85925 19.6881',
      animation: OpacityKeyframeAnimation(
        keyframes: [0.0, 1.0, 0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 2000),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M4.81191 16.6408C3.51213 17.2612 3.2 18.1724 3.2 19.65C3.2 19.8869 3.2183 20.1195 3.25356 20.3464C3.48054 20.3817 3.71313 20.4 3.95 20.4C5.42758 20.4 6.73883 19.6879 7.55925 18.5881',
      animation: OpacityKeyframeAnimation(
        keyframes: [0.0, 0.0, 1.0, 0.0, 0.0],
        duration: Duration(milliseconds: 2000),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M4.81191 16.6408C3.41213 18.0612 2.8 19.4724 2.8 20.95C2.8 21.1869 2.8183 21.4195 2.85356 21.6464C3.08054 21.6817 3.31313 21.7 3.55 21.7C5.02758 21.7 6.33883 20.9879 7.15925 19.8881',
      animation: OpacityKeyframeAnimation(
        keyframes: [0.0, 0.0, 0.0, 1.0, 0.0],
        duration: Duration(milliseconds: 2000),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
  ],
);
