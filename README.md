## Simple React Auth App Template - Auth Managed With Context API

I created this repos, in order to have an out of the box react auth app.

**Feel free to use it :)**

I followed à Module (Feature) based project strucutre.
The advantage of this structure is to have all the components, styles, logics and others that concerns and entity or a specific feature into a single place. So all the App Pages are into `src/modules` folder.

I Put the common/shared components into `shared` folder.

I Also created a `routing` folder that will includes everything that concerns routing, for now it contains only the **MainRouter**

I Also creating a context the manage auth data so that it is available throughout the application. I put two context styles (ways), a simple `Auth.tsx` one and another that uses a reducer (useReducer) `AuthReducer.tsx`, You can choose the way you like, for me i prefer the **context with the reducer** way (and that's what I used in this template) because the way we update the state is like one shot (dispatch an action that can update many state variables user, isAutehticated...) and that's what reduces re-renders and allows us to do it in a clear way.

### Let's talk about some shared components :)

`<ProtectedLayout />`: You can find it in `src/shared/components/layout/ProtectedLayout.tsx`. This is a helper components that we can use to wrape many **private/protected routes**, This saves us from writing **ugly** condition rendering et redirecting every time we have a of routes (it gives us a very clean result), it checks if the user `isAuthenticated`, if it is it return the `Outlet` othewise it **Redirect** to the login page, here is an usage example:

```js
<Route element={<ProtectedLayout />}>
  <Route path="/protected-route-1" element={<ProtectedPage1 />} />
  <Route path="/protected-route-2" element={<ProtectedPage2 />} />
  .
  .
  <Route path="/protected-route-n" element={<ProtectedPagen />} />
</Route>
```

`<ProtectedRoute/>`: You can find it in `src/shared/components/protected-route/index.tsx`. it's the same principle with **ProtectedLayout** but for a single route it checks if the user ``, if it is it return the `children` othewise it **Redirect** to the login page, here is an usage example:

```jsx
 <Route path="/protected-route" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
```

`<ProtectedLink/>`: You can find it in `src/shared/components/protected-link/index.tsx`. this is a components that can use for both **private Link and NavLink**, so if the user `isAuthenticated` it will return the `Link` of the `NavLink` based on the `inNav` prop, otherwise it return nothing, here is an usage example:

```jsx
<ProtectedLink inNav to="/private-link" end>Private</ProtectedLink>
```