export function getFirst150Characters(text: string): string {
    // Check if the input is a string
    if (typeof text !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // If the text is longer than 150 characters, truncate and add '...'
    if (text.length > 150) {
      return text.slice(0, 150) + '...';
    }
  
    // Otherwise, return the text as-is
    return text;
  }