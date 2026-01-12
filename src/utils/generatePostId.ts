// Generates 8-character hexadecimal hash ID using timestamp + random data
export function generatePostId(): string {
  const timestamp = Date.now().toString(16);
  const random = Math.random().toString(16).substring(2);
  const combined = timestamp + random;
  return combined.substring(0, 8);
}

