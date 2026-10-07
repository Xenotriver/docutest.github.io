import React, {useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

export default function Img(props) {
  const [open, setOpen] = useState(false);

  const {src, alt, ...rest} = props;

  return (
    <>
      <img
  src={src}
  alt={alt}
  {...rest}
  onClick={() => setOpen(true)}
  style={{
    ...props.style,
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    cursor: 'zoom-in',
  }}
/>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src,
            alt,
          },
        ]}
        plugins={[Zoom]}
        carousel={{
          finite: true,
          padding: 0,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 2,
          doubleClickMaxStops: 3,
          scrollToZoom: false,
        }}
      />
    </>
  );
}