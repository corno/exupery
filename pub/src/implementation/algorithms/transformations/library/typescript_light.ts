import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as s_in_inf from "../../../../interface/generated/pareto/schemas/interface/data_types/source"
import * as s_in_imp from "../../../../interface/generated/pareto/schemas/implementation/data_types/source"

import * as d_out from "../../../../interface/generated/pareto/schemas/typescript_light/data_types/target"

import * as t_interface_to_typescript_temp from "../interface/typescript_light"
import * as t_implementation_to_typescript_temp from "../implementation/typescript_light"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"
import { Signature } from "../../../../interface/algorithms/transformations/library/typescript_light"


export type Temp_Library = {
    'interface': s_in_inf.Module_Set
    'implementation': s_in_imp.Module_Set
}

export const Temp_Library = (
    $: Temp_Library,
    $p: {
        'phase': 'development' | 'production'
    }
): d_out.Directory => {
    return _ea.dictionary_literal<d_out.Directory.D>({
        "interface": sh.n.directory(t_interface_to_typescript_temp.Module_Set($.interface)),
        "implementation": sh.n.directory(t_implementation_to_typescript_temp.Module_Set(
            $.implementation,
            {
                'phase': $p.phase,
            }
        )),
        //FIX: "generic"
    })
}