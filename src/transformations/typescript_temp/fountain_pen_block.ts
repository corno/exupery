import * as pa from 'exupery-core-alg'

import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"
import * as s_in from "../../generated/interface/schemas/typescript_temp/unconstrained"

import {
    b, l
} from "pareto-fountain-pen/dist/shorthands/block"


export const Block = ($: s_in.Block): s_out.Block => {
    return $ //FIXME: this is a temporary solution
}