import { describe, test, expect } from '@jest/globals';
import { validatePassword, IPasswordResult } from "./password_validate";
 
it("should return an object with success result and no error for a valid password such as Password1", () => {
    const result: IPasswordResult = validatePassword("Password1");
    expect(result).toEqual({
      isValid: true,
      errors: [],
    });
  });
 
 

