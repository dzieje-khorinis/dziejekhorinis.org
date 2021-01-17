import React from "react"
import PropTypes from "prop-types"
import { get } from 'lodash';

export default function HTML(props) {
  const isPolish =  get(process, 'env.LANG_VERSION') === "pl"
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400;0,700;1,400&display=block"
            rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Metamorphous&display=block" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400&display=block"
            rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=block"
            rel="stylesheet" />

      <link href="/css-files/dk-form-styles.css" rel="stylesheet" type="text/css" />
      <link href="/css-files/dk-home-styler.css" rel="stylesheet" type="text/css" />
      <link href="/css-files/dk-responsive-menu.css" rel="stylesheet" type="text/css" />
      <link href="/css-files/dk-slideout.css" rel="stylesheet" type="text/css" />
      <link href="/css-files/dk-mediaqueries.css" rel="stylesheet" type="text/css" />
      <link href="/css-files/dk-adds.css" rel="stylesheet" type="text/css" />
      <link rel="icon" type="image/png" href="dk-favico.png" />
      {/*<script type="text/javascript" src="/scripts/jquery-3.2.1.js"/>*/}
      {/*<script type="text/javascript" src="/scripts/jquery.min.js"/>*/}
      {/*<script type="text/javascript" src="/scripts/dropdown.js"/>*/}
      {isPolish ? (
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W47CKXF');`
        }} />
      ) : (
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXL7RBV');`
        }} />
      )}
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    {isPolish ? (
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W47CKXF"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
    ) : (
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXL7RBV"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }} />
    )}
    <script src="/scripts/responsive_menu.js"></script>
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
