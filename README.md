# Angular 2 Starter Kit (WIP)

This is an opinionated starter kit with the following stack
- angular2
- typescript
- jspm
- sass

Attempting to follow these style guides
	https://github.com/mgechev/angular2-style-guide
	https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Note: Please change tslint rules
	"directive-selector-prefix": [true, "sg"]
	"component-selector-prefix": [true, "sg"]

by replacing the prefix "sg" with whatever is appropriate for your app.

## Issues
Angular2 and rxjs are duplicated as dependencies. I am still trying to figure out the
best way to workaround this issue. Ideally all my app dependencies should be coming
from jspm but currently there is no officially supported way for tsc to recognize modules
from jspm.

## todo
* Figure out strategy to improve performance of jspm dev workflow
* Add angular redux
* Add production build workflow
* Adding testing dependencies and example code
* Write a simple demo app
* Much, much more
