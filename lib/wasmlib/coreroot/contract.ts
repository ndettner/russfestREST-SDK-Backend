// Code generated by schema tool; DO NOT EDIT.

// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import * as wasmlib from '../index';
import * as sc from './index';

export class DeployContractCall {
    func:   wasmlib.ScFunc;
    params: sc.MutableDeployContractParams = new sc.MutableDeployContractParams(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScFuncClientContext) {
        this.func = new wasmlib.ScFunc(ctx, sc.HScName, sc.HFuncDeployContract);
    }
}

export class GrantDeployPermissionCall {
    func:   wasmlib.ScFunc;
    params: sc.MutableGrantDeployPermissionParams = new sc.MutableGrantDeployPermissionParams(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScFuncClientContext) {
        this.func = new wasmlib.ScFunc(ctx, sc.HScName, sc.HFuncGrantDeployPermission);
    }
}

export class RequireDeployPermissionsCall {
    func:   wasmlib.ScFunc;
    params: sc.MutableRequireDeployPermissionsParams = new sc.MutableRequireDeployPermissionsParams(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScFuncClientContext) {
        this.func = new wasmlib.ScFunc(ctx, sc.HScName, sc.HFuncRequireDeployPermissions);
    }
}

export class RevokeDeployPermissionCall {
    func:   wasmlib.ScFunc;
    params: sc.MutableRevokeDeployPermissionParams = new sc.MutableRevokeDeployPermissionParams(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScFuncClientContext) {
        this.func = new wasmlib.ScFunc(ctx, sc.HScName, sc.HFuncRevokeDeployPermission);
    }
}

export class FindContractCall {
    func:    wasmlib.ScView;
    params:  sc.MutableFindContractParams = new sc.MutableFindContractParams(wasmlib.ScView.nilProxy);
    results: sc.ImmutableFindContractResults = new sc.ImmutableFindContractResults(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScViewClientContext) {
        this.func = new wasmlib.ScView(ctx, sc.HScName, sc.HViewFindContract);
    }
}

export class GetContractRecordsCall {
    func:    wasmlib.ScView;
    results: sc.ImmutableGetContractRecordsResults = new sc.ImmutableGetContractRecordsResults(wasmlib.ScView.nilProxy);

    public constructor(ctx: wasmlib.ScViewClientContext) {
        this.func = new wasmlib.ScView(ctx, sc.HScName, sc.HViewGetContractRecords);
    }
}

export class ScFuncs {
    // Deploys a non-EVM smart contract on the chain if the caller has deployment permission.
    static deployContract(ctx: wasmlib.ScFuncClientContext): DeployContractCall {
        const f = new DeployContractCall(ctx);
        f.params = new sc.MutableDeployContractParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    // Grants deploy permission to an agent.
    static grantDeployPermission(ctx: wasmlib.ScFuncClientContext): GrantDeployPermissionCall {
        const f = new GrantDeployPermissionCall(ctx);
        f.params = new sc.MutableGrantDeployPermissionParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    // Enable or disable deploy permission check
    static requireDeployPermissions(ctx: wasmlib.ScFuncClientContext): RequireDeployPermissionsCall {
        const f = new RequireDeployPermissionsCall(ctx);
        f.params = new sc.MutableRequireDeployPermissionsParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    // Revokes deploy permission for an agent.
    static revokeDeployPermission(ctx: wasmlib.ScFuncClientContext): RevokeDeployPermissionCall {
        const f = new RevokeDeployPermissionCall(ctx);
        f.params = new sc.MutableRevokeDeployPermissionParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    // Returns the record for a given smart contract
    static findContract(ctx: wasmlib.ScViewClientContext): FindContractCall {
        const f = new FindContractCall(ctx);
        f.params = new sc.MutableFindContractParams(wasmlib.newCallParamsProxy(f.func));
        f.results = new sc.ImmutableFindContractResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    // Returns the list of all smart contracts deployed on the chain and their records.
    static getContractRecords(ctx: wasmlib.ScViewClientContext): GetContractRecordsCall {
        const f = new GetContractRecordsCall(ctx);
        f.results = new sc.ImmutableGetContractRecordsResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }
}