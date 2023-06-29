import React from "react";

const ctx = React.createContext()


export default ctx

//1- Create a Context Object -> React.createContext()
//2- Access the context obj inside Component A (PARENT Comp)
//3 = Make Context Obj available for all the children of Component using provider Component  "Provider is a Pre-defined Component"
//4- Insert the data in context Obj using props of Provider component
//5- In any Child Comp, First Access the context obj then using Consumer comp access the data from context obj 

//NOTE:- Till Step 1 to 4 Process is same for "Class and Functional component" Step-5 For Functionl Comp  