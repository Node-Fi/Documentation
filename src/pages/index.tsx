import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Home from "../components/Home/Home";
import { VerticalSelectableRow } from "../components/SelectableRows/VerticalSelectableRows";
import { SelectablePresentation } from "../components/SelectableRows/SelectablePresentation";

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
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <Home /> */}
        <SelectablePresentation
          presentationItems={[
            {
              mainImage: (
                <div
                  style={{ width: 300, height: 300, backgroundColor: "red" }}
                />
              ),
              row: {
                title: "Auth (Wallets)",
                description:
                  "Connect, create, or recover a wallet\n(EOA, MPC, etc)",
                leftContent: (
                  <div
                    style={{ width: 100, height: 100, backgroundColor: "red" }}
                  />
                ),
              },
            },
            {
              mainImage: (
                <div
                  style={{ width: 300, height: 300, backgroundColor: "blue" }}
                />
              ),
              row: {
                title: "Read (Data)",
                description:
                  "Get current state, historical, and\nreal-tiem data (super fast)",
                leftContent: (
                  <div
                    style={{ width: 100, height: 100, backgroundColor: "blue" }}
                  />
                ),
              },
            },
            {
              mainImage: (
                <div
                  style={{ width: 300, height: 300, backgroundColor: "green" }}
                />
              ),
              row: {
                title: "Write (Transact)",
                description:
                  "Payments, requests, lending, LPing,\nstaking, swapping, etc",
                leftContent: (
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "green",
                    }}
                  />
                ),
              },
            },
            {
              mainImage: (
                <div
                  style={{ width: 300, height: 300, backgroundColor: "orange" }}
                />
              ),
              row: {
                title: "Compliance",
                description:
                  "OFAC screening, on-chain user\nanalytics, and consulting",
                leftContent: (
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "orange",
                    }}
                  />
                ),
              },
            },
          ]}
          className={styles.presentation}
        />
      </div>
    </Layout>
  );
}
