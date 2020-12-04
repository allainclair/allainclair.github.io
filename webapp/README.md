## Frontend

### React

1. `$ npx create-react-app frontend`

2. cd in webapp/frontend/

3. Remove unnecessary files from installation

4. npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

5. `$ npm i @chakra-ui/icons`

6. npm install react-icons --save


### Deploy github pages

https://create-react-app.dev/docs/deployment/

```
# package.json
"script": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -b BRANCH_OF_THE_SITE -d build",
}
```
