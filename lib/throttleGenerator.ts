const throttleGenerator = (ms: number) => {
  let id: NodeJS.Timeout | null;

  return (cb: any) => {
    if (id) {
      return;
    }

    cb();

    id = setTimeout(() => {
      id = null;
    }, ms);
  };
};

export default throttleGenerator;
