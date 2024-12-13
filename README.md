# Express.js JSON Response Error

This repository demonstrates a common error in Express.js applications where attempting to send a JSON response containing non-string values in an object results in an application crash. 

## Problem

The `res.json()` method in Express.js expects a serializable object.  If the object contains values that cannot be easily converted to JSON (like numbers, functions, or undefined), the application will crash.

## Solution

The solution involves ensuring all values within the JSON response object are primitive types or objects containing only primitive types such as strings, numbers, booleans, and null.