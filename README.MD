# Boilerplate react application
This boilerplate react application was created using `create-react-app` and configured with the options as described in the original `README.md` file

## Setup
To setup the project, check it out and init the dependencies using `yarn install`.

## Commands
# Start the development server using
yarn start

# Start the test runner
yarn test

## Enabled features
- Linting output in the editor `.eslintrc`
- Automatic code formatting using prettier
- SASS stylesheets
- Testing with Jest and Enzyme


## Work flow render login
@startuml
start
    :initialize authenticate user;
    if(user is exist from localStorage) then (yes)
        :render authenticate user menu;
    else (no); 
        :render login link;
     endif;    
end
@enduml


## Work flow login authenticate for user
@startuml
start
    :user click login; 
    :load user from api;
    if(status is success) then (yes)
      :save user to storage; 
      :render authenticate user menu; 
    else (no)
       :throw error; 
    endif;
end
@enduml