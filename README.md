# Router-Flex-Jest-Cypress

A nice and simple app that shows rudimentary React Router/Link and lays out
a typical web-type page with a header (and NavLinks), main body, and a fixed footer,
all responsive; Then example Jest and Cypress tests.

# Cypress tips...

stakutis: npx cypress open
http://docs.cypress.io/api
Tips:
cy.get(...selector) --> Returns a 'subject'
can then do:
.click()
or .type("my input string")
or .submit()
or .should('be.visbible') "should" clauses will wait up til 4 secs
or .should('have.class','myclass')

.should clauses: 'have.text', 'contain', 'have.html' all kinda similar

cy.request(...url)
.

cy.location('pathname') --> returns the pathname part of the url, SO
.should('eq','/mypath/name')

cy.get('input[name='myFieldName'])

use: it('test descr',func) to create tests
use: beforeEach(func) for before-test-setup

Cypress.Commands.add('your command name',func) and put in a file in cypress/support/commands.js
And the func takes whatever params you wish;
Then, to use it, cy.'my command name'(a,b,c... )

Stubbing server requests (fake it out with your own data):

- Create data in cypress/fixtures/'file'.js
- Use the cy.server() command to startup fake mode
- Then use cy.route('GET', url, 'fixture:mynamefordata')
- Then: .as('whatIwantTocallThis') to label it
- Then: cy.wait('@myLabel') then other dots like .get/.should etc

Get via css/test-id:
cy.get('[data-test-id="test-example"]').should('have.class', 'example')

JEST:
npm install -D @testing-library/react react-test-runner jest-dom

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
