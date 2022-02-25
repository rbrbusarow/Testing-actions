/*
 * Copyright (C) 2021 Rick Busarow
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from '@theme/CodeBlock';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "My Title",
    code: (
`val t = Foo()`
    ),
    description: (
      <>
        Description text for initializing <code>Foo</code>.
      </>
    ),
    dest: "docs/configuration"
  },
];

function Feature({imageUrl, title, description, code, dest}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h1 align="center">{title}</h1>
      <div>
        <CodeBlock className="language-kotlin">{code}</CodeBlock>
      </div>
      <p>{description}</p>
      <a href={dest}>Read more</a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The TEMPLATE_PROJECT_NAME project template"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={clsx(styles.heroSlogan)}>
            <strong>TEMPLATE_PROJECT_NAME</strong> does something you want.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.gettingStartedButton,
              )}
              to={useBaseUrl('docs')}>
              Get Started
            </Link>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            {/*            <iframe
              src="https://ghbtns.com/github-btn.html?user=TEMPLATE_GITHUB_USER&repo=TEMPLATE_PROJECT_NAME&type=star&count=true&size=large"
              frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"/>*/}

          </div>
        </div>
      </header>
      <main>
        <div className={styles.badges}>
          <div className="container">
            <a href="https://search.maven.org/search?q=g:TEMPLATE_DOMAIN.TEMPLATE_PROJECT_NAME">
              <img
                src="https://img.shields.io/maven-central/v/TEMPLATE_DOMAIN.TEMPLATE_PROJECT_NAME/TEMPLATE_PROJECT_NAME.svg?label=maven&style=for-the-badge&color=aa0055"
                alt="version badge"/>
            </a>

            &nbsp;

            <a href="https://plugins.gradle.org/plugin/TEMPLATE_DOMAIN.TEMPLATE_PROJECT_NAME">
              <img
                src="https://img.shields.io/gradle-plugin-portal/v/TEMPLATE_DOMAIN.TEMPLATE_PROJECT_NAME?style=for-the-badge"
                alt="Gradle Plugin Portal" />
            </a>

            &nbsp;

            <a href="https://github.com/TEMPLATE_GITHUB_USER/TEMPLATE_PROJECT_NAME/blob/main/LICENSE">
              <img
                src="https://img.shields.io/badge/license-apache2.0-blue?style=for-the-badge"
                alt="license"/>
            </a>
          </div>
        </div>
      </main>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
