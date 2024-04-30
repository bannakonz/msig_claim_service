import { Icons } from '@/constants/ICONS';
import featureFlags from '@/utils/featureFlags';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, ReactNode } from 'react';
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import NavBar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>After sale service (E-Claim)</title>
        <meta name="description" content="After sale service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
