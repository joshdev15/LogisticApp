import {FC} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISize} from '../../models';

const xml = `

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   height="150"
   width="150"
   version="1.1"
   id="Layer_1"
   viewBox="0 0 96.000187 96.000187"
   xml:space="preserve"
   sodipodi:docname="packaging.svg"
   inkscape:version="1.2.1 (9c6d41e, 2022-07-14)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
   id="defs159" /><sodipodi:namedview
   id="namedview157"
   pagecolor="#505050"
   bordercolor="#ffffff"
   borderopacity="1"
   inkscape:showpageshadow="0"
   inkscape:pageopacity="0"
   inkscape:pagecheckerboard="1"
   inkscape:deskcolor="#505050"
   showgrid="false"
   inkscape:zoom="2.36"
   inkscape:cx="121.39831"
   inkscape:cy="166.31356"
   inkscape:window-width="1920"
   inkscape:window-height="1027"
   inkscape:window-x="0"
   inkscape:window-y="25"
   inkscape:window-maximized="1"
   inkscape:current-layer="Layer_1" />
<g
   id="g394"
   transform="matrix(0.13824167,0,0,0.15140744,12.610173,11.738086)"><path
     style="fill:#d99e62"
     d="m 182.26,139.32501 20.87,-83.477999 c 0,-9.223 -7.479,-16.696 -16.696,-16.696 H 16.694 c -5.369,0 -10.403,2.581 -13.544,6.934 -3.14,4.354 -3.988,9.951 -2.293,15.039 L 33.39,139.32501 Z"
     id="path132" /><path
     style="fill:#ffc080"
     d="M 178.086,473.23901 H 66.782 c -18.442,0 -33.391,-14.949 -33.391,-33.391 v -300.523 h 144.696 v 333.914 z"
     id="path134" /><path
     style="fill:#ffd9b3"
     d="M 428.521,473.23901 H 144.695 v -333.914 h 333.914 v 283.827 c -10e-4,27.662 -22.425,50.087 -50.088,50.087 z"
     id="path136" /><path
     style="fill:#ffc080"
     d="M 478.608,139.32501 H 311.652 v 333.914 h 116.87 c 27.663,0 50.087,-22.425 50.087,-50.087 v -283.827 z"
     id="path138" /><g
     id="g144"
     transform="translate(0,-16.500989)">
	<path
   style="fill:#95673f"
   d="M 395.13,422.957 H 228.173 c -9.217,0 -16.696,-7.473 -16.696,-16.696 0,-9.223 7.479,-16.696 16.696,-16.696 H 395.13 c 9.217,0 16.696,7.473 16.696,16.696 0,9.223 -7.479,16.696 -16.696,16.696 z"
   id="path140" />
	<path
   style="fill:#95673f"
   d="M 306.76,260.891 273.379,227.51 c -3.263,-3.268 -7.719,-4.901 -11.814,-4.901 -4.312,0 -8.649,1.733 -11.814,4.901 l -33.381,33.381 c -6.521,6.516 -6.521,17.092 0,23.609 6.521,6.521 17.087,6.521 23.609,0 l 4.892,-4.892 v 59.871 c 0,9.223 7.479,16.696 16.696,16.696 9.217,0 16.696,-7.473 16.696,-16.696 v -59.87 l 4.892,4.892 c 6.522,6.522 17.086,6.522 23.609,0 6.518,-6.517 6.518,-17.093 -0.004,-23.61 z"
   id="path142" />
</g><g
     id="g150"
     transform="translate(0,-16.500989)">
	<path
   style="fill:#875334"
   d="M 406.934,260.891 373.553,227.51 c -3.263,-3.268 -7.719,-4.901 -11.814,-4.901 -4.312,0 -8.649,1.733 -11.814,4.901 l -33.381,33.381 c -6.521,6.516 -6.521,17.092 0,23.609 6.521,6.521 17.087,6.521 23.609,0 l 4.892,-4.892 v 59.871 c 0,9.223 7.479,16.696 16.696,16.696 9.217,0 16.696,-7.473 16.696,-16.696 v -59.87 l 4.892,4.892 c 6.522,6.522 17.086,6.522 23.609,0 6.518,-6.517 6.518,-17.093 -0.004,-23.61 z"
   id="path146" />
	<path
   style="fill:#875334"
   d="m 395.13,389.566 h -83.478 v 33.391 h 83.478 c 9.217,0 16.696,-7.473 16.696,-16.696 0,-9.222 -7.479,-16.695 -16.696,-16.695 z"
   id="path148" />
</g><path
     style="fill:#e6b78a"
     d="M 478.608,139.32501 511.5,26.504011 c 1.25,-4.989 0.13,-10.272 -3.033,-14.326 -3.163,-4.0479998 -8.022,-6.4179998 -13.163,-6.4179998 H 194.782 c -7.663,0 -14.337,5.2119998 -16.196,12.6459998 L 144.695,139.32501 Z"
     id="path152" /><path
     style="fill:#d99e62"
     d="M 508.467,12.178011 C 505.304,8.1300112 500.445,5.7600112 495.304,5.7600112 H 349.372 L 311.652,139.32601 H 478.609 L 511.5,26.504011 c 1.25,-4.989 0.13,-10.272 -3.033,-14.326 z"
     id="path154" /></g>
</svg>
`;

const Packaging: FC<ISize> = ({width, height}) => {
  return <SvgXml width={width} height={height} xml={xml} />;
};

export default Packaging;
