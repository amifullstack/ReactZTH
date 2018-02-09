## Minimal React + Webpack + Hot Realoading Boilerplate
- To run
- Clone repository - cd to `reactunderthehood` and $`npm i`
- $`npm run server`
- head over to `localhost:5000` in your browser.

##Life Cycle Methods

    Before that where should I fetch data ?
    - componentWillMount OR
    - componentDidMount ??

    - componentWillMount get called right before the components first render.
    - By the time componentDidMont is called, component has been rendered once.
        - That means componentDidMount is best place to fetch data.
        - Data wontbe loaded untill after the initial state(state in constructor).
          and this reminds you to setup the initial `state` properly so you don't 
          end up `undefined` state.

        - On server side rendering componentWillMount get called TWICE -once on the server
          and again on the client

