import { logger } from "../Components/logger";

//env wrapper function
export function env(
  name: string,
  required?: boolean,
  fallback?: string,
): string | undefined {
  //check if env is set
  const isSet = process.env[name] !== undefined;

  //check if env is not set and required
  if (!isSet && required) {
    //check if fallback is not set (everything that is a string and not set)
    if (typeof fallback !== "string") {
      //log error
      logger.error(
        `ENV-Var "${name}" is not set, required and has no fallback!`,
      );

      //exit process with error code 1
      process.exit(1);
    }

    //log warning
    logger.warn(
      `ENV-Var "${name}" is not set, required but uses fallback value of "${fallback}"!`,
    );
  }

  //return env when set else return fallback
  return isSet ? process.env[name] : fallback;
}
