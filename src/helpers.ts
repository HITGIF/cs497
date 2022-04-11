export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const keys = (raw: Object) => Object
  .keys(raw)
  .filter(value => isNaN(Number(value)))
  .slice(0, -1)
  .map(normalize)

export const normalize = (raw: string) => raw.split("_").map(capitalize).join(" ")
