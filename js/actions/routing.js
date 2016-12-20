export const PUSH = 'ROUTING/PUSH';
export const POP = 'ROUTING/POP';


export const push = (route) => {
  return { type: PUSH, route }
};

export const pop = () => {
  return { type: POP };
};
