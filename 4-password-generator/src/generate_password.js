export default function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz".split("").reduce((arr, char) => {
    arr.push(char, char.toUpperCase());
    return arr;
  }, []);

  const passwordChars = [];
  for (let i = 0; i < length; i++) {
    passwordChars.push(chars[Math.floor(Math.random() * chars.length)]);
  }

  return passwordChars.join("");
}
