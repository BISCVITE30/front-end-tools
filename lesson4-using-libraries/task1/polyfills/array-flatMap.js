console.log('polyfill for flatMap');

Array.prototype.flat =
  Array.prototype.flat ||
  function flat() {
    // ... implementation for older browser
  };
