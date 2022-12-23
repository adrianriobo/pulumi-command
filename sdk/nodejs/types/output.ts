// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

import * as utilities from "../utilities";

export namespace remote {
    /**
     * Instructions for how to connect to a remote endpoint.
     */
    export interface Connection {
        /**
         * SSH Agent socket path. Default to environment variable SSH_AUTH_SOCK if present.
         */
        agentSocketPath?: string;
        /**
         * The address of the resource to connect to.
         */
        host: string;
        /**
         * The password we should use for the connection.
         */
        password?: string;
        /**
         * The port to connect to.
         */
        port?: number;
        /**
         * The contents of an SSH key to use for the connection. This takes preference over the password if provided.
         */
        privateKey?: string;
        /**
         * The password to use in case the private key is encrypted.
         */
        privateKeyPassword?: string;
        /**
         * Time duration for retry the remote command, timeout is specified using a time duration string. A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as 300ms, or 2h45m. Valid time units are ns, us (or µs), ms, s, m, h.)
         */
        timeout?: string;
        /**
         * The user that we should use for the connection.
         */
        user?: string;
    }
    /**
     * connectionProvideDefaults sets the appropriate defaults for Connection
     */
    export function connectionProvideDefaults(val: Connection): Connection {
        return {
            ...val,
            port: (val.port) ?? 22,
            user: (val.user) ?? "root",
        };
    }

}
