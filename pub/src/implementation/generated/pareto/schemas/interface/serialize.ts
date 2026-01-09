import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/interface/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Type_Arguments: _i_signatures._T_Type_Arguments = ($, $p) => _i_serialize.Document(
    _i_marshall.Type_Arguments(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Imports: _i_signatures._T_Imports = ($, $p) => _i_serialize.Document(
    _i_marshall.Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _i_serialize.Document(
    _i_marshall.Type_Parameters(
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
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($, $p) => _i_serialize.Document(
    _i_marshall.Type_Parameter_Selection(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_serialize.Document(
    _i_marshall.Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
