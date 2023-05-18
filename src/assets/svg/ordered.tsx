import {FC} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISize} from '../../models';

const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="150"
   height="150"
   viewBox="0 0 192 192"
   class="icon"
   version="1.1"
   id="svg138"
   sodipodi:docname="ordered.svg"
   inkscape:version="1.2.1 (9c6d41e, 2022-07-14)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs142" />
  <sodipodi:namedview
     id="namedview140"
     pagecolor="#505050"
     bordercolor="#ffffff"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#505050"
     showgrid="false"
     inkscape:zoom="2.36"
     inkscape:cx="142.16102"
     inkscape:cy="155.29661"
     inkscape:window-width="1920"
     inkscape:window-height="1027"
     inkscape:window-x="0"
     inkscape:window-y="25"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg138"
     showguides="true">
    <sodipodi:guide
       position="192,18.983051"
       orientation="1,0"
       id="guide425"
       inkscape:locked="false" />
    <sodipodi:guide
       position="0,0"
       orientation="1,0"
       id="guide427"
       inkscape:locked="false" />
    <sodipodi:guide
       position="89.491526,0"
       orientation="0,-1"
       id="guide429"
       inkscape:locked="false" />
    <sodipodi:guide
       position="192,192"
       orientation="0,-1"
       id="guide431"
       inkscape:locked="false" />
    <sodipodi:guide
       position="96,113.8983"
       orientation="-1,0"
       id="guide433"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,134,229)" />
    <sodipodi:guide
       position="124.74576,96"
       orientation="0,1"
       id="guide435"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,134,229)" />
  </sodipodi:namedview>
  <path
     d="m 123.27563,33.686509 46.36861,6.250882 -38.18591,38.286657 z m -54.551275,125.017661 -46.3686,-6.25088 38.1859,-38.28666 z m -35.06869,-89.856442 6.23443,-46.490943 38.18591,38.286653 z"
     fill="#9C27B0"
     id="path132"
     style="fill:#2a7fff;stroke-width:0.18289" />
  <path
     d="m 38.721145,85.256288 -16.36539,3.12545 c -0.38965,2.73476 -0.38965,5.07884 -0.38965,7.8136 0,17.971292 6.23443,35.161222 17.92399,48.444342 L 51.579665,134.482 c -8.962,-10.54836 -14.02748,-24.22218 -14.02748,-38.286662 0,-3.51612 0.38965,-7.42292 1.16896,-10.93905 z m 57.27885,-63.290186 c -21.04121,0 -39.74451,8.985641 -53.38233,23.05013 l 10.91026,10.939046 c 10.91025,-11.329721 25.71703,-18.36197 42.47207,-18.36197 3.50687,0 7.403395,0.390683 10.910265,1.172042 l 2.72757,-15.236531 c -4.28618,-1.172034 -8.962,-1.562717 -13.637835,-1.562717 z m 57.278845,85.168278 16.3654,-3.12544 c 0.38965,-2.73476 0.38965,-5.078842 0.38965,-7.813602 0,-17.18993 -5.84479,-33.98918 -16.75505,-47.2723 l -12.07921,9.767 c 8.57235,10.54837 13.24818,23.8315 13.24818,37.11462 0,3.9068 -0.38966,7.813602 -1.16897,11.329722 z m -14.80678,29.30102 c -10.91025,11.32972 -25.71702,18.36197 -42.472065,18.36197 -3.50686,0 -7.40338,-0.39068 -10.91025,-1.17204 l -2.72757,15.23653 c 4.67583,0.78135 9.35165,1.17204 13.63782,1.17204 21.041215,0 39.744505,-8.98565 53.382325,-23.05013 z"
     fill="#9C27B0"
     id="path134"
     style="fill:#2a7fff;stroke-width:0.18289" />
  <path
     d="m 158.34433,123.54295 -6.23444,46.49095 -38.1859,-38.28666 z"
     fill="#9C27B0"
     id="path136"
     style="fill:#2a7fff;stroke-width:0.18289" />
</svg>`;

const Ordered: FC<ISize> = ({width, height}) => {
  return <SvgXml width={width} height={height} xml={xml} />;
};

export default Ordered;
