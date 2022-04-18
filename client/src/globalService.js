export const callToServer = async (model, call) => {
  const response = await fetch(`/${model}`);
  const data = await response.json();
  call(data);
};
