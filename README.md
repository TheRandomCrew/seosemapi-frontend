# Seosemapi-frontend

## Doubt
* Data password not hash in the browser (search image)
* in the dashboardView component is mixed logic component with views components ?
* not use useNewFetch ?
* Routes link in spanish ?
* "cleanCache img" at loading
* Cards components is not reusable


## Where compare the bd data with form data ?

* onLogin 
    * -> onLogin is activated when the buttom "submit" of form is pressed
    * -> onLogin verifies the form fields
    * -> onLogin active the hook state of useFetch

* useFetch 
    * -> receive a url
    * -> Send a fetch (get?)
    * -> setState: data, loading, start 

* React memo is a hook function that do rendering only when a prop changes
    * the Doc file do not have props... ?

## Resolved