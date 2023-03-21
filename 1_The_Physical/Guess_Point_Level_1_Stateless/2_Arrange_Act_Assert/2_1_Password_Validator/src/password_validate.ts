export interface IPasswordResult {
  isValid: boolean,
  errors: string[];
}

export function validatePassword(password: string): IPasswordResult {
  const passwordResult: IPasswordResult = { isValid: true, errors: [] };
  const passwordPattern1 = /\d/;
  const passwordPattern2 = /[A-Z]/;
  if (password.length < 5 || password.length > 15) {
    passwordResult.errors.push("Password should be between 5 and 15 characters long");
  }

  if (!passwordPattern1.test(password)) {
    passwordResult.errors.push("Password should contain atleast 1 digit");
  }

  if (!passwordPattern2.test(password)) {
    passwordResult.errors.push("Password should contain at least one upper case letter");
  }

  if (passwordResult.errors.length > 0) {
    passwordResult.isValid = false;
  } 
  
  return passwordResult;
}