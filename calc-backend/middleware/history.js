const history = [];

export const addHistory = (entry) => {
  const timeStamp = { ...entry, timestamp: new Date().toISOString() };
  history.push(timeStamp);
  console.log(
    `[${timeStamp.timestamp}] ${entry.Operation}:`,
    timeStamp
  );
};

export const getHistory = () => {
  return history;
};

export const clearHistory = () => {
  history.length = 0;
};
<!-- chore: clean up console logs in history middleware -->
