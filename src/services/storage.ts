export function getNumberData (storageKey: string): number {
  return Number(localStorage.getItem(storageKey))
}

export function getData (storageKey: string): [] {
  return JSON.parse(localStorage.getItem(storageKey) ?? '[]')
}

export function setData (storageKey: string, data: any): void {
  localStorage.setItem(storageKey, JSON.stringify(data))
}

export function removeData (storageKey: string): void {
  localStorage.removeItem(storageKey)
}
