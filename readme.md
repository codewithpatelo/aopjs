<img src="./logo2.png" width="232" align="middle" > 

# Neutrosophic agent-oriented approach to assist rural commuter’s decision-making in Ethiopia.
[![Build Status](https://travis-ci.org/patelotech/aopjs.svg?branch=master)](https://travis-ci.org/patelotech/aopjs)
[![license](https://img.shields.io/badge/license-GNUv3-blue.svg)](https://github.com/patelotech/aopifyjs/blob/master/LICENSE.md) 

**Abstract:** More than a billion of the rural merchants in the developing world commonly depend on hiring on-demand transportation services to commute people or goods to markets. The process of selecting the most-optimal fare involves handling decision-making characterised with multiple alternatives, competing criteria and incomplete or even inconsistent information. Decision support systems are commonly used to solve these types of problems. However, (A) most widely used systems are based on object-based approaches which lack high-level abstractions to effectively handle human-machine interaction and (B) those systems ignore to compute the degree in which information is uncertain or inconsistent. In recent years, neutrosophic logic, caught certain momentum in decision science literature to handle that type of information, but scientific research failed in integrating this logic into decisional agent systems. This paper proposes the foundations for a neutrosophic agent-based decision-support approach to overcome those challenges. As a proof of concept, we built an agent that, given a request, takes a dataset of a neutrosophic stratified sample of 104 Ethiopian commuter criteria preferences taken from the Dukem region and a dataset of fare alternatives. The agent computes those datasets using widely used HPA and TOPSIS algorithms to weight, score, rank those alternatives and returns a confidence-scored actionable recommendation to the merchant who made the request. This preliminary system proves to handle this particular problem in a functional manner. Further research should be conducted to assess applications in different fields.

Made with <img src="./logo.png" width="232" align="middle" > 


## Package Dependencies

-   aopifyjs
-   linear-algebra
-   topsis
-   uuid
-   moment

## License

GNU v3


## Quality Ensurance

### Testing
-   mocha: "mocha": "^5.2.0"
-   chai: "chai": "^4.2.0"
-   Test: `npm run test`

### Coverage
-   nyc: "nyc": "^13.1.0"
-   "coveralls": "^3.0.2"
-   Check coverage: `npm run cover`

### Build check
-  travis

### Linting
-   "eslint": "^5.11.1"
-   Code Style: AIRBNB
[AIRBNB JS CODE STYLE](https://dev.mysql.com/doc/ "AIRBNB JS CODE STYLE")
-   Eslint v-5.11.1 // AIRBNB Configuration
-   Error fix: `npm run lint-fix`
-   Error fix:  `npm run lint` or `npm run lint -- --fix`

## What is ENPOV?

<img src="./logo2.png" width="232" align="middle" > 

Enpov is an Ethiopian UN-awarded social enterprise endorsed by the African Union and the Red Cross, that uses data science, USSD and SMS technologies to connect rural merchants with on-demand transportation to periurban markets in Africa.

Check more in <www.enpov.com>

The project received a certification from former U.S. President **Bill Clinton** after reaching the 'Founder's Circle' in the Hult Prize Competition in 2017/2018 for mading it into the top 20 teams of the world out of around 30,000 projects presented and more than 100,000 participants from 117 countries in that edition.

<img src="./logo3.png" width="232" align="middle" > 

