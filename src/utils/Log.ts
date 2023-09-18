

  export default function log(message : any) {
    const date = new Date().toISOString();
    const lineNumber = new Error().stack?.split('\n')[2].split(':')[1];
    if (typeof message === 'string') {
        console.log(`${date} [Line ${lineNumber}] ${message}`);
    } else {
        console.log(`${date} [Line ${lineNumber}] ${JSON.stringify(message)}`);
    }
    
  }
  