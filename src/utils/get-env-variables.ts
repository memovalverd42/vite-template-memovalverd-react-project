/**
 * Function to get the environment variables
 * @returns {import.meta.env} - Returns the environment variables
 */
export const getEnvVariables = () => {
  return {
    ...import.meta.env,
  };
};
