# CRUD App

## installation

```javaScript
* mkdir client
* cd client
* npx create-react-app .
* npm start


// styles

* npm install @material-ui/core
* npm install axios react-redux redux-thunk moment react-router-dom
* npm i react-file-base64 react-google-login


//Add url in package.json file under private
"proxy": "http://localhost:5000",

//example for set a state using object
onChange={(e) => setPostData({ ...postData, creator: e.target.value })}

//multiple classes in material ui
className={`${classes.root} ${classes.form}`}
```

### Named and Default import

* **I just saw this discussion on default and named imports and exports when you are using ES6 modules**

#### 1- **This is a default import:**

* `In this case it doesn’t matter what name you assign to it when importing`

```javascript
// B.js
    import A from './A'

    or
    import A from './A'
    or
    import MyA from './A'
    or
    import Something from './A'
```

* It only works if A contains a default export

```javascript

// A.js
    export default 42
```

#### **2- This is a named import called A:**

```javascript
    import { A } from './A'
```

* It only works if A contains a named export called A:

```javascript
    export const A = 42
```

* `In this case the name matters because you’re importing a specific thing by its export name`

```javascript
    // B.js
    import { A } from './A'
    import { myA } from './A' // Doesn't work!
    import { Something } from './A' // Doesn't work!
```

* `To make these work, you would add a corresponding named export to A:`

```javascript
    // A.js
    export const A = 42
    export const myA = 43
    export const Something = 44
```

> A module can only have one default export, but as many named exports as you like (zero, one, or many). You can import them together.

```javascript
    // B.js
    import A, { myA, Something } from './A'
```

## Material Ui Icons

``npm install @material-ui/icons``

## Zeet

* to deploy your App

## Login With Google (JWT)

```bash
npm install jwt-decode react-google-login
```

### Structure for react router dom

```javascript

    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/auth" exact element={<Auth />}/>
            </Routes>
        </Container>
    </BrowserRouter>
```

### Fix Styles Errors

```javaScript
    npm install @emotion/react 
    npm install @emotion/styled
```

### Google Sign In Id

[Client-Id](https://console.cloud.google.com/apis/)

* OAuth consent screen
* Enter your project details and your Email then continue
* Save and continue
* Save and continue
* Back to the dashboard
* CREATE CREDENTIALS => OAuth client ID => Application Type(web application)
* Add URL => http://localhost:3000 => https://localhost:3000
* Authorized redirect URIs =>  http://localhost:3000
* Authorized redirect URIs =>  http://localhost:3000/auth
* Create
* copy your client id and client secret

## clean the cookies that cause error with google sign in

> clear browser cache
=> Chrome settings => Click More tools Clear browsing data => clear browsing data


### ?. operator => don't throw error if didn't found