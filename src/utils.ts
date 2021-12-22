export function appendBaseClassName(
  defaultName: string,
  addName?: string
): string {
  let className = [defaultName];
  if (addName) {
    const temp = addName.split(' ');
    className = [...className, ...temp];
  }
  return className.join(' ');
}
