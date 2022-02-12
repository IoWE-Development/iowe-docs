import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Our Vision',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Big telcos have too much power --they control the public's access to the free flow of information, charge too much, and poorly maintain monopolized networks.
 
 We want to democratize internet service provisioning and access, giving those that use and operate the network equity in the heart of the information age.
      </>
    ),
  },
  {
    title: 'Our Story',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We're riding the decentralization wave that's lowering barriers and bringing the people into big tech & finance and providing opportunities for disruption at every turn.

        People-powered internet connectivity is just one stop on our journey to a people powered world:
      </>
    ),
  },
  {
    title: 'Our Technology',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       We leverage the Helium LongFi hotspot  blockchain technology to provide coverage and grow the The People's Network.
 
      By using Proof of Coverage the network is able to reward participants for continuously demonstrating their internet connectivity & broadcast signal and for transferring data over the network.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
