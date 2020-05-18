**As a backend server we will use a Rest API**

### Sections:
* Register
* Login 
  * will add a cookie
* List of ads 
  * if there is no cookie, the access will be rejected
  * this query params can be added to the url:
    - name: filtered by those who start with the indicated string
    - price: filtering by price. Between a range x-y, less than a price x-, or more than a price -y.
    - tag: allow to filter ads with the indicated tag.
    - type: allow to filter by sale ads (=true), or buy ads (=false)
    - skip: allows to skip results (used for paging together with limit)
    - limit: allows to limit the number of results returned fields
    - fields: fields to be displayed in the ad
* Create a new add
* Add detail

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

