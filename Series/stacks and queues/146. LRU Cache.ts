class LRUCache {
  map: Map<number, number> = new Map();
  capacity: number;
  constructor(c: number) {
    this.capacity = c;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const val = this.map.get(key) as number;
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.get(key) === -1 && this.capacity === this.map.size) {
      for (let keyVal of this.map as any) {
        this.map.delete(keyVal[0]);
        break;
      }
    }
    this.map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
