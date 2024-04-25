export function isValidToken(token: string) {
  const regex = /^ghp_[a-zA-Z0-9]{36,215}$/gm;
  return regex.test(token);
}