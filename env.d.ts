import {
  CfProperties,
  Request,
  ExecutionContext,
  R2Bucket,
} from "@cloudflare/workers-types";

declare module "h3" {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: {
      request: Request;
      env: {
        BUCKET_R2: R2Bucket;
      };
      context: ExecutionContext;
    };
  }
}
