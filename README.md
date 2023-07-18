Create applications to check password strength 

using a distributed framework and custom hooks: 

The essence of the task:
Create a field for entering a password, under the field add 3 sections that will show the reliability of the password;
Password strength changes must occur in real time;
How to calculate password reliability:
Only letters/numbers/symbols - the password is simple;
A combination of letter-symbols/letter-numbers/number-symbols - medium password;
Contains letters, symbols and numbers - the password is reliable;
The color of the sections will depend on the reliability of the password:
If the field is empty, all sections are gray;
If the field contains less than 8 characters, all sections are red;
If the password is simple - the first section is red, the others are gray;
If the password is medium - the first two sections are yellow, the last is gray;
If the password is strong, all sections will be green;

ABOUT :
In the code above, we have a component called PasswordStrengthChecker that renders the password input field and three sections for password strength. We also have a custom hook called usePasswordStrength that handles the password state and calculates the password strength.

The usePasswordStrength custom hook sets up the password state and calculates the password strength based on the rules you provided. It uses the useState and useEffect hooks from React to manage the state and update the password strength in real time when the password changes.

Now, you can use the PasswordStrengthChecker component in your application to check the password strength. The password strength will be updated in real time as the user types in the password, and the color of the sections will change based on the password strength.
