# Router-Flex-Jest-Cypress

A nice and simple app that shows rudimentary React Router/Link and lays out
a typical web-type page with a header (and NavLinks), main body, and a fixed footer,
all responsive; Then example Jest and Cypress tests.

## Cypress tips...

To run: \
> npx cypress open     -- GUI;\
> npm run cypress   -- CLI (or npx cypress run)

http://docs.cypress.io/api
Tips:\
>cy.get(...selector) --> Returns a 'subject'\
>can then do:\
>.click()\
>or .type("my input string")\
>or .submit()\
>or .should('be.visbible') "should" clauses will wait up til 4 secs\
>or .should('have.class','myclass')\

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

