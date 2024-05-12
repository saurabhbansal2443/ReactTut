# USED react CDN 
- 1) created element using React.createElement()
- 2) Created root using ReactDOM.createRoot(document.getElementbyId());
- 3) Rendered the element using root.render(ele)

# using Bundler (Webpack , Vite , Parcel )
- 1) This app cannot go to production because it is not optimised 
- 2) There are lot of things other than react to make our app fast 
- 3) first install npm install -D parcel 
- 4) D is used here for the Development dependency 
- 5) npm is for installing package/npx is for exectuing package 
- 6) CDN links are costly operations, so we will install the react using NPM 
- 7) DEV build , Local server , HMR = Hot module replacement, 
- 8) Bundlers  is using a file watching algo, It also uses cache to make things faster 
- 9) Bundlers also do image optmization 
- 10) Bundling and compressing the file 
- 11) Good error handling 
- 12) Tree Shaking - remove unused code for you 

# jsx
- 1) JSX is not  the part of react 
- 2) JSX is a HTML like syntax, it is not HTML written in JS 
- 3) JSX is transpilled before it goes to the JS engine this process is also done by Parcel ( BABEL )
- 4) Babel is the package present in bundlers, it transpiles the code 
- 8) JSX is also converted into react element ( React.createElement) that's why both of the things are same 
- 9) In JSX we have to use camel case while writing the attrubutes 
- 10) If we just use {} in JSX we can write the javascript in these braces 


# React Component 
- 1) Everthing is a component in React ( Class based component and functional component )
- 2) functional component is uses functions ( It returns JSX code )
- 3) You must write the first letter of functionalcomponent character capital 
- 4) If you are using a component inside a component then it is called component composition 
- 5) 