import { monitor } from "./monitor.js";

/**
 * Express middleware to track AI costs automatically (if usage is provided in res.locals or handled by the user)
 */
export function costMonitorMiddleware(req: any, res: any, next: any) {
  const originalSend = res.send;

  res.send = function(body: any) {
    // This is a placeholder for where one might extract usage data
    // Usually usage is tracked in the service layer, but this middleware 
    // can be expanded to intercept response bodies.
    return originalSend.call(this, body);
  };

  next();
}
