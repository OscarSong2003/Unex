import React from "react";

import { Global } from "@emotion/react";

const Fonts = (): React.ReactElement => (
  <Global
    styles={`
      @font-face {
        font-family: 'Animosa';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('./fonts/Animosa/Animosa-ExtraBold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Animosa';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Animosa/Animosa-Bold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Animosa';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Animosa/Animosa-Regular.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Animosa';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/Animosa/Animosa-Light.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Animosa';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('./fonts/Animosa/Animosa-ExtraLight.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Black.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-BlackItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-ExtraBold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-ExtraBoldItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Bold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-BoldItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-SemiBold.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-SemiBoldItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Medium.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-MediumItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Regular.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Italic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Light.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-LightItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-ExtraLight.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-ExtraLightItalic.ttf') format("truetype");
      }
      @font-face {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('./fonts/Epilogue/Epilogue-Thin.ttf') format("truetype");
        @font-face {
          font-family: 'Epilogue';
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url('./fonts/Epilogue/Epilogue-ThinItalic.ttf') format("truetype");
        }
      }
    `}
  />
);

export default Fonts;
