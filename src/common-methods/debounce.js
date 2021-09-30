export function debounce(func, wait) {
  let timerId;

  return function debouncedFunction() {
    const invoke = () => {
      timerId = null;
      func.apply(this, arguments);
    };

    clearTimeout(timerId);
    timerId = setTimeout(invoke, wait);
  };
}