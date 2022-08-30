export function makeSerializeable(o) {
  return JSON.parse(JSON.stringify(o));
}
