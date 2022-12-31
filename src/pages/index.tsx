import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Home from "../components/Home/Home";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/sdk/intro">
            SDK Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/sdk/intro">
            Wallet Service API Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/sdk/intro">
            Minima Router API Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/sdk/intro">
            Data and Analytics Service API Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function HomePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Home />
    </Layout>
  );
}
