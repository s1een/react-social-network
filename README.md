### About

- This is the front-end part of a React social networking web application that was developed while learning React.js.
- The application can be tested from the [link](https://s1een.github.io/react-social-network/ "link")
- Full stack project [here](https://github.com/s1een/react-social-app "here")

# React Social App

![](https://crispersoft.com/ru/wp-content/uploads/2020/01/reactready.jpg)

## Technologies used in the development:

- [![React][React.js]][React-url]
- [![ReactContext][ReactContext.js]][ReactContext-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-social-app`

## UseContext

AuthContext.js

```javascript
const INITIAL_STATE = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

```
AuthActions.js

```javascript
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const UnFollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
```
AuthReducer.js
```javascript 
export const AuthReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (fl) => fl !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
```
## React Navigation

```javascript
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/messanger"
          element={!user ? <Navigate to="/" /> : <Messanger />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Acknowledgments
Resources that helped me in development.

* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

## My Links
- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/main.png
[React.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-20232A?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[ReactContext.js]: https://img.shields.io/badge/React_Context-20232A?style=for-the-badge&logo=react&logoColor=green
[ReactContext-url]: https://ru.reactjs.org/docs/context.html
[npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
[npm-url]: https://www.npmjs.com/
[linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
[linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
[telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/r3ason_why
[portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
[portfolio-url]: https://s1een.github.io/my_cv_site/

