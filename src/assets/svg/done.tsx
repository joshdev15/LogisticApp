import {FC} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISize} from '../../models';

const xml = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="150"
   height="150"
   viewBox="0 0 4.5 4.5"
   fill="none"
   version="1.1"
   id="svg134"
   sodipodi:docname="done.svg"
   inkscape:version="1.2.1 (9c6d41e, 2022-07-14)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs138" />
  <sodipodi:namedview
     id="namedview136"
     pagecolor="#505050"
     bordercolor="#ffffff"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#505050"
     showgrid="false"
     inkscape:zoom="1.18"
     inkscape:cx="128.81356"
     inkscape:cy="78.813559"
     inkscape:window-width="1309"
     inkscape:window-height="430"
     inkscape:window-x="305"
     inkscape:window-y="324"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg134" />
  <path
     fill-rule="evenodd"
     clip-rule="evenodd"
     d="m 2.25,4.2266949 c 1.0917067,0 1.9766949,-0.8849882 1.9766949,-1.9766949 0,-0.4026747 -0.1204027,-0.7772276 -0.3271869,-1.0896179 L 2.3279696,2.9065482 C 2.175852,3.0755776 1.919848,3.1005499 1.737913,2.964092 L 1.0200565,2.4257062 C 0.92301617,2.3529199 0.90335025,2.2152541 0.97612996,2.1182204 1.0489097,2.0211866 1.1865755,2.0015075 1.2836158,2.0742938 L 2.0014636,2.6126796 3.614798,0.82009186 C 3.2600033,0.48133467 2.779293,0.2733051 2.25,0.2733051 c -1.0916978,0 -1.9766949,0.8849971 -1.9766949,1.9766949 0,1.0917067 0.8849971,1.9766949 1.9766949,1.9766949 z"
     fill="#222222"
     id="path132"
     style="fill:#00ff00;stroke-width:0.15;stroke:#00ff00;stroke-dasharray:none" />
</svg>`;

const Done: FC<ISize> = ({width, height}) => {
  return <SvgXml width={width} height={height} xml={xml} />;
};

export default Done;
