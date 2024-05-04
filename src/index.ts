import { defaults } from "./constants.js";

import { decrypt } from "./decrypt.js";
import { encrypt } from "./encrypt.js";
import { generateKey } from "./generateKey.js";
import { hmacWithPassword } from "./hmacWithPassword.js";
import { seal } from "./seal.js";
import { unseal } from "./unseal.js";

export * from "./types.js";

export const Iron = { 
  defaults,
  decrypt,
  encrypt,
  generateKey,
  hmacWithPassword,
  seal,
  unseal
}   ;


export { 
  defaults,
  decrypt,
  encrypt,
  generateKey,
  hmacWithPassword,
  seal,
  unseal
}   ;