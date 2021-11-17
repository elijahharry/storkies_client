import NextHead from "next/head";

const Head = ({ title, desc, keywords }) => {
  return (
    <NextHead>
      {title ? (
        <title>{title} | Storkies</title>
      ) : (
        <title>Storkies | Fly High</title>
      )}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />{" "}
      {desc ? (
        <meta name="description" content={desc} />
      ) : (
        <meta
          name="description"
          content="We are a customer-oriented delivery service within the California cannabis industry whose goal is to set a new standard of service to our customers."
        />
      )}
      {keywords ? (
        <meta name="keywords" content={keywords} />
      ) : (
        <meta
          name="keywords"
          content="Cannabis, Delivery, California, Storkies, CA, Weed"
        />
      )}
      <link rel="stylesheet" href="https://use.typekit.net/juk1kmm.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Satisfy&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/fonts/slimjoe.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#416d4a" />
      <link rel="shortcut icon" href="/fav/favicon.ico" />
      <meta name="msapplication-TileColor" content="#f1f1f1" />
      <meta name="msapplication-config" content="/fav/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.GOOGLE_ANALYTICS}');`,
        }}
      />
    </NextHead>
  );
};

export default Head;
