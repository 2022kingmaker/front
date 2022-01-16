const debounceGenerator = (ms: number) => {
  let id: NodeJS.Timeout;

  return (cb: any) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      cb();
    }, ms);
  };
};

export default debounceGenerator;
