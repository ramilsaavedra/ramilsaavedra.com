import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const Document = (props: DocumentProps) => {
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@SaavedraRamil' />
        <meta name='twitter:creator' content='@SaavedraRamil' />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Ramil Saavedra | Software Engineer'
        />
        <meta
          property='og:description'
          content='Hi!👋 I am a software engineer from the Philippines. I love spending
            my time admiring the beauty of web development, from learning new
            technologies to building a web application that can heavily
            contribute to the community.'
        />
        <meta
          property='og:image'
          content='/static/images/opengraph-image.jpg'
        />
        <meta
          property='og:image:alt'
          content='Ramil Saavedra | Software Engineer'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
