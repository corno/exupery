import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/implementation/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"
import * as _i_r_interface from "../interface/serialize"


export const Variables: _i_signatures._T_Variables = ($, $p) => _i_serialize.Document(
    _i_marshall.Variables(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Module: _i_signatures._T_Module = ($, $p) => _i_serialize.Document(
    _i_marshall.Module(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Module_Set: _i_signatures._T_Module_Set = ($, $p) => _i_serialize.Document(
    _i_marshall.Module_Set(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Literal: _i_signatures._T_Literal = ($, $p) => _i_serialize.Document(
    _i_marshall.Literal(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Initialization: _i_signatures._T_Initialization = ($, $p) => _i_serialize.Document(
    _i_marshall.Initialization(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Selection: _i_signatures._T_Selection = ($, $p) => _i_serialize.Document(
    _i_marshall.Selection(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
