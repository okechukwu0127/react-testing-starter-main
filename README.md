# REACT TESTING APPLICATION
## Testing in React for unit, e2e and integration testing with React Testing Library, Jest & Cypress
<br/>


The idea of the application is to show you how to run basic unit and integration test in reactJs using react `@testing-library` and `cypress`<br/>
The test process follows a  <b>3 PHASE PATTERN</b> know as
- ARRANGE  phase - where you arrage/choose your component of choice

- ACT phase - were you trigger userEvent, typing, clicking e.t.c

- ASSERT phase - here you simple provide your assertions for the tests

<br/>
<br/>

 ### WHY YOU SHOULD TEST

 - `Goal`:  check whether an application behaves as expected

 - `Safeguard you against unwanted behaviours` when changes are made (like new features, refractor the code and update the app depenndencies)

 - `Automated` , and thus efficient on the long-term

<br/>
<br/>

## WHAT TO TEST

`Have a test priority`.  

1.  High value features of the app.     —      [better doing E2E using Cypress]
2.  Edge cases in high value features  
3.  Things that are easy to break
4.  Basic React component testing 

<br/>
<br/>

# CYPRESS E2E TEST running on an Electron canvas
run the following command to initialize cypress

`yarn install`<br/>
`yarn run cypress open`

![Demo](/application.png)

<br/>
<br/>

# INTEGRATION TEST with @testing-library
run the following command to initialize cypress

`yarn install`<br/>
`yarn test`

![Demo](/integration_test.png)