# Neutrosophic agent-oriented approach to assist rural commuter’s decision-making in Ethiopia.

**Abstract: ** More than a billion of the rural merchants in the developing world commonly depend on hiring on-demand transportation services to commute people or goods to markets. The process of selecting the most-optimal fare involves handling decision-making characterised with multiple alternatives, competing criteria and incomplete or even inconsistent information. Decision support systems are commonly used to solve these types of problems. However, (A) most widely used systems are based on object-based approaches which lack high-level abstractions to effectively handle human-machine interaction and (B) those systems ignore to compute the degree in which information is uncertain or inconsistent. In recent years, neutrosophic logic, caught certain momentum in decision science literature to handle that type of information, but scientific research failed in integrating this logic into decisional agent systems. This paper proposes the foundations for a neutrosophic agent-based decision-support approach to overcome those challenges. As a proof of concept, we built an agent that, given a request, takes a dataset of a neutrosophic stratified sample of 104 Ethiopian commuter criteria preferences taken from the Dukem region and a dataset of fare alternatives. The agent computes those datasets using widely used HPA and TOPSIS algorithms to weight, score, rank those alternatives and returns a confidence-scored actionable recommendation to the merchant who made the request. This preliminary system proves to handle this particular problem in a functional manner. Further research should be conducted to assess applications in different fields.

[![license](https://img.shields.io/badge/license-GNUv3-blue.svg)](https://github.com/patelotech/aopifyjs/blob/master/LICENSE.md) [![Greenkeeper badge](https://badges.greenkeeper.io/patelotech/aopifyjs.svg)](https://greenkeeper.io/)




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


