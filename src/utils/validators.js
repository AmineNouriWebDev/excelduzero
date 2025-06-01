// Fichier de validation (exemple)
export function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPasswordStrong(password) {
  return password.length >= 8;
}
